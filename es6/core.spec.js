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
        it('переводит верно', () => {
            assert.deepEqual(core.fooBar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), ['', '', 'Foo', '', 'Bar',
                'Foo', '', '', 'Foo', 'Bar', '', 'Foo', '', '', 'FooBar']);
        });
        it('на пустой массив возвращается пустой массив', () => {
            assert.deepEqual(core.fooBar([]), []);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('слово добавляется и находится', () => {
            let d = new core.Dictionary();
            d.setValue("JS", true);

            assert.equal(d.getValue("JS"), true);
        })

        it('меняется значение слова', () => {
            let d = new core.Dictionary();
            d.setValue("JS", true);
            d.change("JS", "very good");

            assert.equal(d.getValue("JS"), "very good");
        })

        it('слово удаляется, если есть', () => {
            let d = new core.Dictionary();
            d.setValue("JS", true);
            assert.equal(d.del("JS"), true);
            assert.equal(d.del("JS+"), false);
            d.del("JS");
            assert.equal(d.getValue("JS"), undefined);
        })
    });
});
