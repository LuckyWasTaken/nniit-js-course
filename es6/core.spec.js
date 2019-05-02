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

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('при вводе в словарь одинаковых переводов они запоминаются только раз', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            assert.equal(dic.map.size,2);
        });
        it('Работает получение перевода слова из словаря', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            assert.equal(dic.getTranslation("mother"),"мама");
        });
        it('Работает сеттинг нового слова', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            dic.setWordAndTranslation({"брат":"brother"});
            assert.equal(dic.getTranslation("брат"),"brother");
        });
        it('Не сеттуется слово, которое уже есть в словаре', () => {
            const dic1 = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            const dic2 = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            dic2.setWordAndTranslation({"мама":"mother"});
            assert.equal(dic2.map.size==dic1.map.size,true);
        });
    });

    describe('#fooBar', () => {
        it('при введении не числа возвращает число 0', () => {
            assert.equal(core.fooBar('blablabla'),0);
        });
        it('при введении 0 возвращает число 0', () => {
            assert.equal(core.fooBar(0),0);
        });
        it('корректная работа при введении 15', () => {
            assert.deepEqual(core.fooBar(15),[1,2,"Foo",4,"Bar","Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });//deepEqual тк проверка содержимого
    });
});
