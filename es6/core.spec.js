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

        it('на пустой массив возвращается null', () => {
            assert.equal(core.calculateSalaryDifference([]), null);
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
        let dic;
        beforeEach(() => {
            dic = new core.Dictionary();
          });
        it('экземпляр класса создается', () => {
            assert.equal(!!dic, true);
        });
        it('при добавлении не строки в качестве key возвращается false', () => {
            assert.equal(dic.add(1, 'one'), false);
        });
        it('при добавлении не строки в качестве value возвращается false', () => {
            assert.equal(dic.add('one', 1), false);
        });
        it('При добавлении строки в качестве key и value не возвращается false', () => {
            assert.notEqual(dic.add('one', 'один'), false);
        });
        it('Возвращается корректное значение по ключу', () => { 
            dic.add('one', 'один');
            assert.equal(dic.getTranslation('one'), 'один');
        });
        it('Если перевод не найден, возвращается false', () => {
            dic.add('one', 'один');
            assert.equal(dic.getTranslation('two'), false);
        });
        it('слово корректно удаляется', () => {
            dic.add('one', 'один');
            dic.delete('one');
            assert.equal(dic.getTranslation('one'), false);
        });
        it('При удалении несуществующего слова возвращается null', () => {
            dic.add('one', 'один');
            assert.equal(dic.delete('two'), null);
        });
    });
});
