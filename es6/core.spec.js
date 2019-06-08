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

        it("Don't set in case of repiated", () => {
            const dic = new core.Dictionary({"дерево":"tree","дом":"house","Римма":"Rimma","дом":"house"});
            assert.equal(dic.map.size,3);
        });
        it('Get word', () => {
            const dic = new core.Dictionary({"дерево":"tree","дом":"house","Римма":"Rimma"});
            assert.equal(dic.getTranslation("tree"),"дерево");
        });
        it('Set new word', () => {
            const dic = new core.Dictionary({"дерево":"tree","дом":"house","Римма":"Rimma"});
            dic.setWordAndTranslation({"прикол":"joke"});
            assert.equal(dic.getTranslation("прикол"),"joke");
        });
        it("Don't set", () => {
            const dic1 = new core.Dictionary({"дерево":"tree","дом":"house","Римма":"Rimma"});
            const dic2 = new core.Dictionary({"дерево":"tree","дом":"house","Римма":"Rimma"});
            dic2.setWordAndTranslation({"Римма":"Rimma"});
            assert.equal(dic2.map.size==dic1.map.size,true);
        });
    });

    describe('#fooBar', () => {
        it('if NaN return 0', () => {
            assert.equal(core.fooBar('blablabla'),0);
        });
        it('if 0 return 0', () => {
            assert.equal(core.fooBar(0),0);
        });
        it('Correct work with 15', () => {
            assert.deepEqual(core.fooBar(15),[1,2,"Foo",4,"Bar","Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });
    });

});
