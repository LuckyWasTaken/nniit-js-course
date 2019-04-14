const assert = require("assert");
const core = require("./core");

describe("es6", () => {
  describe("#fioToName", () => {
    it("ФИО в Имя Фамилия корректно", () => {
      assert.equal(core.fioToName("Иванов Иван Иванович"), "Иван Иванов");
    });

    it("ФИ в Имя Фамилия", () => {
      assert.equal(core.fioToName("Петров Петр"), "Петр Петров");
    });
  });

  describe("#filterUnique", () => {
    it("массив с уникальными равен сам себе", () => {
      assert.deepEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
    });

    it("массив с неуникальными отфильтрован", () => {
      assert.deepEqual(core.filterUnique([1, 1, 1, 1]), [1]);
    });

    it("пустой массив", () => {
      assert.deepEqual(core.filterUnique([]), []);
    });
  });

  describe("#calculateSalaryDifference", () => {
    it("считает разницу корректно", () => {
      assert.equal(core.calculateSalaryDifference([1, 2, 3]), 3);
    });

    it("на пустой массив возвращается falsy значение", () => {
      assert.equal(!!core.calculateSalaryDifference([]), false);
    });
  });

  describe("#fooBar", () => {
    it("Массив корректный", () => {
      assert.deepEqual(core.fooBar(15), [
        1,
        2,
        "Foo",
        4,
        "Bar",
        "Foo",
        7,
        8,
        "Foo",
        "Bar",
        11,
        "Foo",
        13,
        14,
        "FooBar"
      ]);
    });

    it("Некорректное значение числа n", () => {
      assert.equal(core.fooBar(-1), false);
    });
  });

  describe("#Dictionary", () => {
    it("экземпляр класса создается", () => {
      const dic = new core.Dictionary();
      assert.equal(!!dic, true);
    });

    it("Не добавляется слово с типом Число", () => {
      const dic = new core.Dictionary();
      assert.equal(dic.addNewWord(123, 15), false);
    });

    it("Новое слово добавлено в словарь", () => {
      const dic = new core.Dictionary();
      assert.equal(dic.addNewWord("Road", "Дорога"), true);
    });

    it("Слово, которое уже есть в словаре, повторно не добавляется", () => {
      const dic = new core.Dictionary();
      dic.addNewWord("Road", "Дорога");
      assert.equal(dic.addNewWord("Road", "Дорога"), false);
    });

    it("Добавленное в словарь слово найдено", () => {
      const dic = new core.Dictionary();
      dic.addNewWord("Road", "Дорога");
      assert.equal(dic.findWord("Road"), true);
    });

    it("Слово в словаре не найдено (не было добавлено ранее)", () => {
      const dic = new core.Dictionary();
      dic.addNewWord("Road", "Дорога");
      assert.equal(dic.findWord("Way"), false);
    });

    it("Слово, добавленное в словарь ранее, успешно удалено", () => {
      const dic = new core.Dictionary();
      dic.addNewWord("Road", "Дорога");

      assert.equal(dic.deleteWord("Road"), true);
    });

    it("Слово, которое не было добавлено в словарь ранее, не может быть удалено", () => {
      const dic = new core.Dictionary();
      dic.addNewWord("Road", "Дорога");
      assert.equal(dic.deleteWord("Way"), false);
    });
  });
});
