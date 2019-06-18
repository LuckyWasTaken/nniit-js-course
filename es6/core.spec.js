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
        it("Слова не устанавливаются повторно", () => {
            const dic = new core.Dictionary({"сердце":"heart","исключение":"exclusion","Иисус":"Jesus","сердце":"heart"});
            assert.equal(dic.map.size,3);
        });
        it('Вывод перевода', () => {
            const dic = new core.Dictionary({"сердце":"heart","исключение":"exclusion","Иисус":"Jesus"});
            assert.equal(dic.getTranslation("heart"),"сердце");
        });
        it('Добавляет новое слово', () => {
            const dic = new core.Dictionary({"сердце":"heart","исключение":"exclusion","Иисус":"Jesus"});
            dic.setWordAndTranslation({"работа":"job"});
            assert.equal(dic.getTranslation("работа"),"job");
        });
        it("Не добавляет слова второй раз", () => {
            const dic1 = new core.Dictionary({"сердце":"heart","исключение":"exclusion","Иисус":"Jesus"});
            const dic2 = new core.Dictionary({"сердце":"heart","исключение":"exclusion","Иисус":"Jesus"});
            dic2.setWordAndTranslation({"Иисус":"Jesus"});
            assert.equal(dic2.map.size==dic1.map.size,true);
        });
    });
        
    describe('#fooBar', () => {
        it('Если не число - возвращет ноль', () => {
            assert.equal(core.fooBar('гыг'),0);
        });
        it('Если ноль -  возвращает ноль', () => {
            assert.equal(core.fooBar(0),0);
        });
        it('Корректно работает с 15', () => {
            assert.deepEqual(core.fooBar(15),[1,2,"Foo",4,"Bar","Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });
    });
    
});
