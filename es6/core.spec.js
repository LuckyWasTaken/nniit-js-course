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

  describe("#Dictionary", () => {
    it("экземпляр класса создается", () => {
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
  describe("#fooBar", () => {
    it("n = 2", () => {
      assert.deepEqual(core.fooBar(2), [1, 2]);
    });
    it("n = 3", () => {
      assert.deepStrictEqual(core.fooBar(3), [1, 2, "Foo"]);
    });
    it("n = 5", () => {
      assert.deepStrictEqual(core.fooBar(5), [1, 2, "Foo", 4, "Bar"]);
    });
    it("n = 15", () => {
      assert.deepStrictEqual(core.fooBar(15), [
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
    it("Обращение к функции без значения", () => {
      assert.equal(core.fooBar(), false);
    });
  });
});
