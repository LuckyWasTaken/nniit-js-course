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

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            dic.addWord("one", "1");
            dic.addWord(1, "one");
            dic.getValue("one");
            dic.getValue("two");
            dic.deleteWord("one");
            dic.getValue("two");

            assert.equal(!!dic, true);
        });
        it('добавляем  ключ : значение', () => {
            const dic = new core.Dictionary();
            assert.equal(dic.addWord("one", "1"), true);
            assert.equal(dic.addWord(1, "one"), false);
        });
        it('поиск по ключу', () => {
            const dic = new core.Dictionary();
            dic.addWord("one", "1");

            assert.equal(dic.getValue("one"), "1");
            assert.equal(dic.getValue("two"), undefined);
        });
        it('удаление ключ : значение', () => {
            const dic = new core.Dictionary();
            dic.addWord("one", "1");

            assert.equal(dic.deleteWord("one"), true);
            assert.equal(dic.deleteWord("two"), false);
        });
    });

    describe('#fooBar', () => {
        it('возвращение корректного массива', () => {
           assert.deepEqual(core.fooBar(16), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar", 16]);
        });
        it('на 0 значение возвращается пустой массив', () => {
            assert.deepEqual(core.fooBar(0), []);
        });
    });    
});
