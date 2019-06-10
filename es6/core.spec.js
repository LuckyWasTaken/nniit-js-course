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
        it('Проверка на 15', () => {
            assert.deepEqual(core.fooBar(15), [1, 2, 'Foo', 4, 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar']);
        });

        it('Проверка на 5', () => {
            assert.deepEqual(core.fooBar(5), [1, 2, 'Foo', 4, 'Bar']);
        });
    });

    describe('#Dictionary', () => 
    {
        const dic = new core.Dictionary();
        it('экземпляр класса создается', () => {
            assert.equal(!!dic, true);
        });
        it('корректная работа словаря', () => {
            dic.addWordToDict("JS","хороший язык программирования");
            assert.equal(dic.getDefinition("JS"),"хороший язык программирования");
        });
        it('реакция на ввод пустой строки', () => {
            assert.equal(dic.addWordToDict(''),null);
        });
    });
});
