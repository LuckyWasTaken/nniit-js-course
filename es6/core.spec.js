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
        it('возвращает правильный массив', () => {
            assert.deepEqual(core.fooBar(5), [1, 2, 'Bar', 4]);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });
        it("Получение слова из словаря", () => {
            const dic = new core.Dictionary();
            dic.addWord("word", "Слово");
            assert.equal(dic.getWord("word"), "Слово"); 
          });
          it("Добавление в словарь слова без перевода", () => {
            const dic = new core.Dictionary();
            assert.equal(dic.addWord("word"), false);
          });
          it("Повторное добавление слова в словарь", () => {
            const dic = new core.Dictionary();
            dic.addWord("word", "Слово");
            assert.equal(dic.addWord("word", "Другое слово"), false);
          });
        });
});
