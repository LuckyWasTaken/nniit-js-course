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
        it('массив заполняется корректно', () => {
            assert.deepEqual(core.fooBar(20), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar", 16, 17, "Foo", 19, "Bar"]);
        });

        it('Введено не число', () => {
            assert.deepEqual(core.fooBar("five"), false);
        });

        it('число меньеше 1!', () => {
            assert.deepEqual(core.fooBar(-4), false);
        });
    });

    describe('#Dictionary', () => {
        const dic = new core.Dictionary();
        beforeEach(function () {
            dic.set("табуретка", "стул без спинки");
            dic.set("стул", "табуретка со спинкой");
        });
        it('экземпляр класса создается', () => {
            const dic1 = new core.Dictionary();
            assert.equal(!!dic1, true);
        });
        it('Тестим словарь на работу с массивом', () => {
            let arr = ['a', 'r', 'r', 'a', 'y'];
            assert.deepEqual(dic.set(arr, "массив"), false);
        });
        it('Тестим словарь на работу с числами', () => {
            assert.deepEqual(dic.set(123, "chislo"), false);
        });
        it('Тестим словарь на поиск значений слов по введенному слову', () => {
            assert.deepEqual(dic.getWord("табуретка"), "стул без спинки");
        });
        it('Тестим на поиск слова, которого нет в словаре', () => {
            assert.equal(dic.getWord("не табуретка"), false);
        });
        it('Тестим на замену значения слова в словаре', () => {
            dic.change("табуретка", "неудобный стул без спинки");
            assert.equal(dic.getWord("табуретка"), "неудобный стул без спинки");
        });
        it('Тестим словарь на удаление слова из словаря', () => {
            dic.delete("табуретка");
            assert.equal(dic.getWord("табуретка"), false);
        });

    });
});

