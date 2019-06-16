cassert.equal(!!dic, true);
        });
        it('при вводе в словарь одинаковых переводов они запоминаются только раз', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            assert.equal(dic.map.size,2);
        });
        it('Работает получение перевода слова из словаря', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            assert.equal(dic.getTranslation("mother"),"мама");
        });
        it('Работает сеттинг нового слова', () => {
            const dic = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            dic.setWordAndTranslation({"брат":"brother"});
            assert.equal(dic.getTranslation("брат"),"brother");
        });
        it('Не сеттуется слово, которое уже есть в словаре', () => {
            const dic1 = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            const dic2 = new core.Dictionary({"мама":"mother","мама":"mother","папа":"father"});
            dic2.setWordAndTranslation({"мама":"mother"});
            assert.equal(dic2.map.size==dic1.map.size,true);
        });
    });

    describe('#fooBar', () => {
        it('при введении не числа возвращает число 0', () => {
            assert.equal(core.fooBar('blablabla'),0);
        });
        it('при введении 0 возвращает число 0', () => {
            assert.equal(core.fooBar(0),0);
        });
        it('корректная работа при введении 15', () => {
            assert.deepEqual(core.fooBar(15),[1,2,"Foo",4,"Bar","Foo",7,8,"Foo","Bar",11,"Foo",13,14,"FooBar"]);
        });//deepEqual т.к. проверка содержимого
    });
});