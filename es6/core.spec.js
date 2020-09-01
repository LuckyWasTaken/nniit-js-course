const assert = require('assert');
const core = require('./core');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.equal(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.equal(core.fioToName('Петров Петр'), 'Петр Петров');
        });

        it('Ф в Имя Фамилия', () => {
            assert.equal(core.fioToName('Петров'), 'Incorrect input');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.equal(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.equal(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#fooBar', () => {
        it('при делении на 3 возвращает Foo', () => {
            assert.deepEqual(core.fooBar(4), [1, 2, "Foo", 4]);
        });

        it('при делении на 5 возвращает Bar', () => {
            assert.deepEqual(core.fooBar(6), [1, 2, "Foo", 4, "Bar", "Foo"]);
        });

        it('при делении на 15 возвращает FooBar', () => {
            assert.deepEqual(core.fooBar(15), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar"]);
        });
    });

    describe('#Dictionary', () => {
        let dic;
        it('экземпляр класса создается', () => {
            dic = new core.Dictionary();
            assert.equal(!!dic, true);
        });
        it('добавление записи - при корректных key и value возвращает true', () => {
            assert.equal(dic.add("абзац", "Красная строка, отступ в начале строки."), true);
        });
        it('добавление записи - при не корректном key возвращает false', () => {
            assert.equal(dic.add(1, "Колпак для лампы, светильника."), false);
        });
        it('добавление записи - при не корректном value возвращает false', () => {
            assert.equal(dic.add("абажур", 1), false);
        });
        it('добавление записи - при корректных key и value возвращает true', () => {
            assert.equal(dic.add("абажур", "колпак для лампы, светильника"), true);
        });
        it('редактирование записи - при не корректном kay возвращает false', () => {
            assert.equal(dic.editing("абориген", "Коренной житель страны, местности."), false);
        });
        it('редактирование записи - при не корректном kay возвращает false', () => {
            assert.equal(dic.editing(1, "Коренной житель страны, местности."), false);
        });
        it('редактирование записи - при не корректном value возвращает false', () => {
            assert.equal(dic.editing("абажур", 1), false);
        });
        it('редактирование записи - при корректном kay и value возвращает true', () => {
            assert.equal(dic.editing("абажур", "Колпак для лампы, светильника."), true);
        });
        it('получение записи - при корректном kay возвращает описание', () => {
            assert.equal(dic.get("абажур"), "Колпак для лампы, светильника.");
        });
        it('получение записи - при не корректном kay возвращает false', () => {
            assert.equal(dic.get("абориген"), false);
        });
        it('количество записей - возвращаяет 2', () => {
            assert.equal(dic.sizeOfDictionary(), 2);
        });
        it('удаление записи - при не корректном kay возвращает false', () => {
            assert.equal(dic.delete("абориген"), false);
        });
        it('удаление записи - при корректном kay возвращает true', () => {
            assert.equal(dic.delete("абажур"), true);
        });
        it('очистка словаря - возвращает true', () => {
            assert.equal(dic.clear(), true);
        });

    });
});
