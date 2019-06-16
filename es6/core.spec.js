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
        const dict = new core.Dictionary();
        dict.addWord('Intelligence','Mage');
        dict.addWord('Strength','Warrior');
        dict.addWord('Agility','Assassin'); 
        dict.addWord(1,'sad');
        it('экземпляр класса создается', () => {
            assert.equal(!!dict,true);  
        });
        it('Проверка не пустой ли словарь', () => {
            assert.equal(dict.isEmpty(), false);
        });
        it('Добавлено Agility -> Assassin ', () => {
            assert.equal(dict.check('Agility'), 'Assassin');
        });
        it('Проверка на размер словаря ', () => {
            assert.equal(dict.number(), 3);
        });
        
    });
    describe('#fooBar',()=>{
        it('заменяет 3 на Foo',()=>{
            assert.deepEqual(core.fooBar(3),[1,2,'Foo']);
        });
        it('заменяет 5 на Bar',()=>{
            assert.deepEqual(core.fooBar(5),[1,2,'Foo',4,'Bar']);
        });
        it('заменяет 15 на fooBar',()=>{
            assert.deepEqual(core.fooBar(15),[1,2,'Foo',4,'Bar','Foo',7,8,'Foo','Bar',11,'Foo',13,14,'fooBar']);
        });
        it('выводит пустой массив, если 0',()=>{
            assert.deepEqual(core.fooBar(0),[]);
        });
    });
});
