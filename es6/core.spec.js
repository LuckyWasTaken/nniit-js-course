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
        it('Выдает верный массив', () => {
            assert.deepEqual(core.fooBar(16), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "Foobar"]);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('узнать размер словаря', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            assert.equal(dic.get_size(), 1);
        });
        it('удаление значения по ключу', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            dic.add_key_and_value('12', 'hello');
            assert.equal(dic.delete_value('12'), true);
        });
        it('проверка по ключу', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            dic.add_key_and_value('12', 'hello');
            assert.equal(dic.has_key('12'), true);
        });
        it('получение значения', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            dic.add_key_and_value('12', 'hello');
            assert.equal(dic.get_value('12'), 'hello');
        });
        it('очистка словаря', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            dic.add_key_and_value('12', 'hello');
            dic.clear_Dict()
            assert.equal(dic.get_size(), 0);
        });
        it('добавление элементов', () => {
            const dic = new core.Dictionary();
            dic.add_key_and_value('123', '345');
            dic.add_key_and_value('12', 'hello');
            assert.equal(dic.get_size(), 2);
            assert.equal(dic.has_key('123'), true);
            assert.equal(dic.has_key('12'), true);
            assert.equal(dic.get_value('123'), '345');
            assert.equal(dic.get_value('12'), 'hello');
        });
    });
});
