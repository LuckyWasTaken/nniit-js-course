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
        it('заменяет кратное 3', () => {
            assert.deepEqual(core.fooBar(3), [1,2,'Foo']);
        });
        it('заменяет кратное 5', () => {
            assert.deepEqual(core.fooBar(5), [1,2,'Foo',4,'Bar']);
        });
        it('заменяет кратное 15', () => {
            assert.deepEqual(core.fooBar(15), [1,2,'Foo',4,'Bar',"Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });
        it('обрабатывает 0', () => {
            assert.deepEqual(core.fooBar(0), []);
        });
        
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('Слово добавляется', () => {
            const dic = new core.Dictionary();
            dic.add("яблоко","apple");
            dic.add("ананас","pineapple");

            assert.equal(dic.getT("яблоко"), "apple");
            assert.equal(dic.getT("ананас"), "pineapple");
        });
        it('Цифры не доабавляются', () => {
            const dic = new core.Dictionary();
            dic.add("1","one");
            dic.add("два","2");
            dic.add(3,"3");

            assert.equal(dic.isEmpty(), true);
        });
    });
});
