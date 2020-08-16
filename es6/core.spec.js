const assert = require('assert');
const core = require('./core');
const { fooBar } = require('./core');

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

        it('добавляется описание разрешенного слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("London", "The capital of Greate Britain");
            assert.equal(dic._message, "Word added successfully");
            assert.equal(dic._words.size, 1);
            dic.addWord("Moscow", "The capital of Russian Federation");
            assert.equal(dic._message, "Word added successfully");
            assert.equal(dic._words.size, 2);
        });

        it('попытка добавить слово с запрещенными символами', () => {
            const dic = new core.Dictionary();
            dic.addWord("Lo`ndon", "The capital of Greate Britain");
            assert.equal(dic._words.size, 0);
            assert.equal(dic._message, "Alert: wrong symbol in the word");
        });


        it('поиск и печатать описания входящего в словарь слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("London", "The capital of Greate Britain");
            dic.addWord("Moscow", "The capital of Russian Federation");
            dic.printDescription("London");
            assert.equal(dic._message, "London - The capital of Greate Britain");
        });

        it('попытка напечатать описание не входящего в словарь слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("London", "The capital of Greate Britain");
            dic.printDescription("LondonQWE");
            assert.equal(dic._message, "Alert: word is not found");
        });

        it('удаление описания входящего в словарь слова', () => {
            const dic = new core.Dictionary();
            dic.addWord("London", "The capital of Greate Britain");
            assert.equal(dic._message, "Word added successfully");
            assert.equal(dic._words.size, 1);
            dic.deleteWord("London");
            assert.equal(dic._message, "Word deleted successfully");
            assert.equal(dic._words.size, 0);
        });

    });

    describe('#fooBar', () => {
        it('устанавливаем тип объекта - массив', () => {
            assert.equal(toString.call(fooBar(10)), "[object Array]");
        });

        it('сравниваем длину массива', () => {
            assert.equal(fooBar(10).length, 10);
        });

        it('сравниваем элементы массива', () => {
            const arr = [1,2,"foo",4,"bar","foo",7,8,"foo","bar"];
            let i = 0;
            for (let n of fooBar(10)){
                assert.equal(n, arr[i++]);
            }
        });
    });
});
