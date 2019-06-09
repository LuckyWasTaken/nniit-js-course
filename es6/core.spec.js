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
        it('корректно работает при n==3', () => {
            assert.deepEqual(core.fooBar(3), [1,2,'Foo']);
        });
        it('корректно работает при n==15', () => {
            assert.deepEqual(core.fooBar(15), [ 1,2,'Foo',4,'Bar','Foo',7,8,'Foo','Bar',11,'Foo',13,14,'FooBar' ]);
        });
        it('корректно работает при n==0', () => {
            assert.deepEqual(core.fooBar(0), []);
        });
    });

    describe('#Dictionary', () => {
        
        const dic = new core.Dictionary();
        dic.insert('one','1');
        dic.insert('two','2');
        dic.insert('three','3');
        dic.insert('three','три');

        it('экземпляр класса создается', () => {
            assert.equal(!!dic, true);
        });
        it('добавлено "one => 1"', () => {
            assert.equal(dic.getValue('one'),'1');
        });
        it('добавлено "two => 2"', () => {
            assert.equal(dic.getValue('two'),'2');
        });
        it('изменено "three => 3" на "three => три"', () => {
            assert.equal(dic.getValue('three'),'три');
        });
        it('размер словаря равен 3"', () => {
            assert.equal(dic.size(),3);
        });
    });
});
