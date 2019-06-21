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
        it('корректно работает для n = 15', () => {
            assert.deepEqual(core.fooBar(15), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar"]);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.equal(!!core.fooBar([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it('возвращает false при попытке указать не строку как значение', () => {
            const dic = new core.Dictionary();

            assert.equal(dic.addValue(0), false);
        });
        it('возвращает true при попытке указать строку как значение', () => {
            const dic = new core.Dictionary();

            assert.equal(dic.addValue('String'), true);
        });
        it('принимает четыре строки и возвращает третью по ключу-номеру', () => {
            const dic = new core.Dictionary();
            dic.addValue('Я');
            dic.addValue('Люблю');
            dic.addValue('Фронтэнд');
            dic.addValue('(Нет)');

            assert.equal(dic.getValue(3), 'Фронтэнд');
        });
        it('принимает четыре строки и возвращает null если пытаемся обратиться к 80 строке', () => {
            const dic = new core.Dictionary();
            dic.addValue('Я');
            dic.addValue('Люблю');
            dic.addValue('Фронтенд');
            dic.addValue('(Нет)');

            assert.equal(dic.getValue(80), null);
        });
        it('принимает четыре строки и возвращает false если ключ не число', () => {
            const dic = new core.Dictionary();
            dic.addValue('Я');
            dic.addValue('Люблю');
            dic.addValue('Фронтенд');
            dic.addValue('(Нет)');

            assert.equal(dic.getValue('Фронтэнд'), false);
        });
    });
});
