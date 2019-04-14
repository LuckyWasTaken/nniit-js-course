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
        it('массив заполняется корректно', () => {
            assert.deepEqual(core.fooBar(20), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar", 16, 17, "Foo", 19, "Bar"]);
        });

        it('Введено не число', () => {
            assert.deepEqual(core.fooBar("five"), false);
        });

        it('число меньеше 1!', () => {
            assert.deepEqual(core.fooBar(-4), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.equal(!!dic, true);
        });
        
        it('Тестим словарь', () => {
            const dic = new core.Dictionary();
            dic.set("табуретка", "стул без спинки");
            dic.set("стул", "табуретка со спинкой");
            let arr = ['a', 'r', 'r', 'a', 'y'];
            
            assert.deepEqual(dic.set(arr, "массив"), -1);
            assert.deepEqual(dic.set(123, "chislo"), -1);
            assert.deepEqual(dic.getWord("табуретка"), "стул без спинки");
            assert.equal(dic.getWord("не табуретка"), -2);
            dic.change("табуретка", "неудобный стул без спинки");
            assert.equal(dic.getWord("табуретка"), "неудобный стул без спинки");
            dic.delete("табуретка");
            assert.equal(dic.getWord("табуретка"), -2);


        });
    });
});

