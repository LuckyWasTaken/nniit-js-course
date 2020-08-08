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

        it('на пустой массив возвращается false значение', () => {
            assert.equal(core.calculateSalaryDifference([]), false);
        });
    });

    describe('#fooBar', () => {
        it('при делении на 3 возвращается Foo', () => {
            assert.deepEqual(core.fooBar(4),[1,2,"Foo",4]);
        });

        it('при делении на 5 возвращается Foo', () => {
            assert.deepEqual(core.fooBar(5),[1,2,"Foo",4, "Bar"]);
        });

        it('при делении на 15 возвращается FooBar', () => {
            assert.deepEqual(core.fooBar(15),[1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar"]);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.equal(!!dic, true);
        });
        it('при добавлении не строки в качестве key возвращается false', () => {
            const dic = new core.Dictionary();
            assert.equal(dic.add(1, 'one'), false);
        });
        it('при добавлении не строки в качестве value возвращается false', () => {
            const dic = new core.Dictionary();
            assert.equal(dic.add('one', 1), false);
        });
        it('При добавлении строки в качестве key и value не возвращается false', () => {
            const dic = new core.Dictionary();
            assert.notEqual(dic.add('one', 'один'), false);
        });
        it('Возвращается корректное значение по ключу', () => {
            const dic = new core.Dictionary();
            dic.add('one', 'один');
            assert.equal(dic.getTranslation('one'), 'один');
        });
        it('Если перевод не найден, возвращается false', () => {
            const dic = new core.Dictionary();
            dic.add('one', 'один');
            assert.equal(dic.getTranslation('two'), false);
        });
        it('слово корректно удаляется', () => {
            const dic = new core.Dictionary();
            dic.add('one', 'один');
            dic.delete('one');
            assert.equal(dic.getTranslation('one'), false);
        });
        it('При удалении несуществующего слова возвращается false', () => {
            const dic = new core.Dictionary();
            dic.add('one', 'один');
            assert.equal(dic.delete('two'), false);
        });
    });
});
