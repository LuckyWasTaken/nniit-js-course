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
        it('выдает корректный массив', () => {
            assert.deepEqual(core.fooBar(17), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar", 16, 17]);
        });

        it('на параметр меньше 1 выдает false значение', () => {
            assert.equal(!!core.fooBar(-1), false);
        });

        it('на параметр 0 выдает false значение', () => {
            assert.equal(!!core.fooBar(0), false);
        });

        it('на нечисловой параметр выдает false значение', () => {
            assert.equal(!!core.fooBar("вася"), false);
        });
    });

    describe('#Dictionary', () => {
        const dic = new core.Dictionary();
        it('экземпляр класса создается', () => {
           // const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });

        describe('#addWord', () => {

            it('на нестроковый параметр в key выдает false значение', () => {
                assert.equal(!!dic.addWord(5, "d"), false);
            });

            it('на нестроковый параметр в value выдает false значение', () => {
                assert.equal(!!dic.addWord("d", 7), false);
            });

            it('на пустую строку в параметре выдает false значение', () => {
                assert.equal(!!dic.addWord("", ""), false);
            });

            it('корректно добавляет слово', () => {
                dic.addWord("time", "время");
                assert.equal(!!dic.engToRus.has("time"), true);
                assert.equal(dic.getTranslation("time"), "время");
            });
        });

        describe('#changeTranslation', () => {
            it('на нестроковый параметр в key выдает false значение', () => {
                assert.equal(!!dic.changeTranslation(5, "d"), false);
            });

            it('на нестроковый параметр в value выдает false значение', () => {
                assert.equal(!!dic.changeTranslation("d", 7), false);
            });

            it('на пустую строку в параметре выдает false значение', () => {
                assert.equal(!!dic.changeTranslation("", ""), false);
            });

            it('корректно меняет перевод', () => {
                dic.addWord("room", "пространство");
                dic.changeTranslation("room", "комната, пространство");
                assert.equal(!!dic.engToRus.has("room"), true);
                assert.equal(dic.getTranslation("room"), "комната, пространство");
            });

            it('добавляет перевод, если слова не было в словаре', () => {
                dic.changeTranslation("I", "я");
                assert.equal(!!dic.engToRus.has("I"), true);
                assert.equal(dic.getTranslation("I"), "я");
            });
        });

        describe('#deleteWord', () => {
            it('на нестроковый параметр в key выдает false значение', () => {
                assert.equal(!!dic.deleteWord(5), false);
            });


            it('на пустую строку в параметре выдает false значение', () => {
                assert.equal(!!dic.deleteWord(""), false);
            });

            it('корректно удаляет слово', () => {
                dic.addWord("he", "он");
                dic.deleteWord("he");
                assert.equal(!!dic.engToRus.has("he"), false);
            });
        });

        describe('#getTranslation', () => {
            it('на нестроковый параметр в key выдает false значение', () => {
                assert.equal(!!dic.getTranslation(5), false);
            });


            it('на пустую строку в параметре выдает false значение', () => {
                assert.equal(!!dic.getTranslation(""), false);
            });

            it('корректно возвращает перевод слова', () => {
                dic.addWord("she", "она");
                assert.equal(dic.getTranslation("she"), "она");
            });

            it('если слова нет возвращает false значение', () => {
                assert.equal(!!dic.getTranslation("we"), false);
            });
        });
    });
});
