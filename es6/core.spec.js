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

        it('при добавлении числа возвращает "It is no word"', () => {
           
            assert.equal( dic.setNewWord("123"), "It is no word");
        });

        it('корректно работает с добавлением слова', () => {
            
            assert.equal(dic.setNewWord("fueu"), dic.getWord(0));
        });

        it('корректно работает с добавлением двойного слова', () => {
            
            assert.equal(dic.setNewWord("fueu оарао"), dic.getWord(1));
        });

        it('при добавлении строки с количеством 3 и более возвращает "It is no word"', () => {
            
            assert.equal(dic.setNewWord("fueu оарао tyu"),"It is no word");
        });

        it('корректно удаляет слово', () => {
            assert.equal(dic.deleteWord(0),"word deleted");
            assert.equal(dic.getWord(0),undefined);
        });

        it('повторная попытка удаления слова возвращает "word not found"', () => {
            assert.equal(dic.deleteWord(0),"word not found");
        });

        it('корректно возвращает слово по его ключевому значению ', () => {
            assert.equal(dic.getWord(1),"fueu оарао");
        });
    });
});
