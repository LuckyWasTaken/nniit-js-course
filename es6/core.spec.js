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
        it('На n<=0 возвращает пустой массив', () => {
            assert.deepEqual(core.fooBar(-10), []);
        });

        it('На NaN возвращает пустой массив', () => {
            assert.deepEqual(core.fooBar("Я строка!"), []);
        });

        it('Корректрно возвращает fooBar-ы', () => {
            assert.deepEqual(core.fooBar(16), [1, 2, "Foo", 4, "Bar", "Foo", 7, 8, "Foo", "Bar", 11, "Foo", 13, 14, "FooBar"]);
        }); 
    });

    describe('#Dictionary', () => {
        it('Экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            assert.equal(!!dic, true);
        });

        it('Работает корректно', () => {
            const dic = new core.Dictionary();
            dic.addToDictionary('Кот','Это зверь, который мохнатый, с хвостом и мурчалом');
            dic.addToDictionary('Пес','Это зверь, который мохнатый и с хвостом, но без мурчала');
            dic.addToDictionary('Котлетки с макарошками','Вид пищи, который иногда ошибочно причисляется к лучшем блюдам мира');
            dic.addToDictionary('Котлетки с пюрешкой','Вид пищи, заслуженно считающийся эталоном по своим вкусоароматическим характеристикам');

            assert.deepEqual(dic.getMeaning('Абрвалг'), false);
            assert.deepEqual(dic.getMeaning(''), false);
            assert.deepEqual(dic.getMeaning(7), false);
            assert.deepEqual(dic.getMeaning('Кот'), 'Это зверь, который мохнатый, с хвостом и мурчалом');

            dic.changeMeaning('Кот','Можно просто котэ');
           
            assert.deepEqual(dic.getMeaning('Кот'), 'Можно просто котэ');
            
            dic.deleteWord('Кот');
            assert.deepEqual(dic.getMeaning('Кот'), false);
        });
       
    });
});
