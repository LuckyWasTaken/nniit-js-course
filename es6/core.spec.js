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
    it("корректно работает без чисел, кратных 3 и 5", () => {
      assert.deepEqual(core.fooBar(2), [1, 2]);
    });

    it("корректно работает, если есть числа, кратные 3", () => {
      assert.deepEqual(core.fooBar(3), [1, 2, "Foo"]);
    });

    it("корректно работает, если есть числа, кратные 5", () => {
      assert.deepEqual(core.fooBar(5), [1, 2, "Foo", 4, "Bar"]);
    });

    it("корректно работает при любом наборе знаячений", () => {
      assert.deepEqual(core.fooBar(16), [
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
        "FooBar",
        16
      ]);
    });
  });

  describe("#Dictionary", () => {
    const translator = new core.Dictionary();

    it("экземпляр класса создается", () => {
      assert.equal(!!translator, true);
    });

    translator.add("Мама", "Mother");
    translator.add("Папа", "Father");
    translator.add("Бабушка", "Grandmother");

    it("Добавление работает", () => {
      assert.equal(translator.get("Мама"), "Mother");
    });

    it("Изменение работает", () => {
      translator.add("Мама", "Mum");
      assert.equal(translator.get("Мама"), "Mum");
    });

    it("Поиск ключа работает", () => {
      assert.equal(translator.find("Мама"), true);
    });

    it("Удаление работает", () => {
      translator.delete("Папа");
      assert.equal(translator.get("Папа"), undefined);
    });

    it("Размер словаря считается правильно", () => {
      assert.equal(translator.size(), 2);
    });
  });
});
