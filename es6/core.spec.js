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
        it('возвращает массив корректно', () => {
            assert.deepEqual(core.fooBar(16), [1, 2, 'Foo', 4, 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar', 16]);
        });

        it('вызов без аргумента', () => {
            assert.deepEqual(core.fooBar(), []);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });

        it('в словарь добавляются key:value', () => {
            const dic = new core.Dictionary();
            assert.equal(dic.addWord("map","отображения"), true);
            assert.equal(dic.addWord("set","наборы"), true);
            assert.equal(dic.addWord(77,"аааа"), false);
        });

        it('корректный поиск по ключу', () => {
            const dic = new core.Dictionary();
            dic.addWord("map","отображения");
            dic.addWord("set","наборы");

            assert.equal(dic.getValue("map"), "отображения");
            assert.equal(dic.getValue("book"), undefined);
        });

        it('удаление из словаря', () => {
            const dic = new core.Dictionary();
            dic.addWord("map","отображения");
            dic.addWord("set","наборы");

            assert.equal(dic.deleteWord("map"), true);
            assert.equal(dic.deleteWord("book"), false);
        });

    });
});
