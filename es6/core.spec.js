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
        it('Массив корректен', () => {
            assert.deepEqual(core.fooBar(20),[
                1,     2,     'Foo',
                4,     'Bar', 'Foo',
                7,     8,     'Foo',
                'Bar', 11,    'Foo',
                13,    14,    'FooBar',
                16,    17,    'Foo',
                19,    'Bar'
              ]);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('Элемент добавляется', () => {
            const dic = new core.Dictionary();
            let key="aaa";
            let val="bbb"
            dic.set(key,val);
            assert.deepEqual(dic.getVal(key),val);
        });
        it('Элемент удаляется', () => {
            const dic = new core.Dictionary();
            let key="aaa";
            let val="bbb"
            dic.set(key,val);
            dic.delete(key);
            assert.deepEqual(dic.getVal(key),undefined);
        });
    });
});
