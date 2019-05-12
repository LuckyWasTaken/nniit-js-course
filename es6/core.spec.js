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
            assert.equal(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#fooBar', () => {
        it('возвращает корректный массив', () => {
            assert.deepEqual(core.fooBar(15), [1, 2, 'Foo', 4, 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar']);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });

        it('ключ и значение должны состоять только из символов латиницы и кириллицы', () => {
            const dic = new core.Dictionary({"1":"+-=","hello":"привет"});
            assert.equal(dic.dict.size, 1);
        });

        it('ключ может состоять только из символов латиницы', () => {
            const dic = new core.Dictionary({"1":"+-=","hello":"привет"});
            assert.equal(dic.dict.size, 1);
        });

        it('значение может состоять только из символов кириллицы', () => {
            const dic = new core.Dictionary({"1":"+-=","hello":"привет"});
            assert.equal(dic.dict.size, 1);
        });

        it('возвращает перевод, если слово есть в словаре', () => {
            const dic = new core.Dictionary({"hello":"привет"});
            assert.equal(dic.getTranslation("hello"), "привет");
        });

        it('возвращает Not found, если слово не найдено в словаре', () => {
            const dic = new core.Dictionary({"hello":"привет"});
            assert.equal(dic.getTranslation("go"), "Not found");
        });


    });
});
