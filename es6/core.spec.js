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
        it('вернулся корректный массив', () => {
            assert.deepEqual(core.fooBar(16), [1,2,"Foo",4,"Bar","Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });

        it('слово добавляется', () => {
            const dic = new core.Dictionary();
            assert.equal(dic.addWord('Человек', 'двуногое без перьев'), true);
            assert.equal(dic.addWord('Редиска', 'нехороший человек'), true);
            assert.equal(dic.addWord(13, 'отличное число!'), false);
        });

        it('слово удаляется', () => {
            const dic = new core.Dictionary();
            dic.addWord('Человек', 'двуногое без перьев');
            assert.equal(dic.deleteWord('Человек'), true);
        });

        it('слово находится', () => {
            const dic = new core.Dictionary();
            dic.addWord('Редиска', 'нехороший человек');
            assert.equal(dic.findWord('Редиска'), true);
        });
    });
});
