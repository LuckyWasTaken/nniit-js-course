var assert = require("assert"),
  core = require("./core");

describe("Структуры данных", () => {
  describe("#capitalize", () => {
    it("Корректно отрабатывает", () => {
      assert.equal(core.capitalize("привет"), "Привет");
    }),
      it("Возвращает '' при пустой строке", () => {
        assert.equal(core.capitalize(""), "");
      });
  });

  describe("#truncate", () => {
    it("Корректно отрабатывает на строчках меньше n символов", () => {
      assert.equal(core.truncate("привет", 20), "привет");
    }),
      it("Корректно отрабатывает на строчках больше n символов", () => {
        assert.equal(
          core.truncate(
            "Собирает мать сына в школу, кладет ему хлеб, колбасу и гвозди",
            26
          ),
          "Собирает мать сына в школу..."
        );
      });
  });

  describe("#isEmpty", () => {
    it("Корректно обрабатывает пустой объект", () => {
      assert.equal(core.isEmpty({}), true);
    }),
      it("Корректно обрабатывает непустой объект", () => {
        assert.equal(core.isEmpty({ a: 1 }), false);
      });
  });

  describe("#multiply", () => {
    it("Корректно обрабатывает пустой объект", () => {
      assert.deepEqual(core.multiply({}), {});
    }),
      it("Корректно обрабатывает непустой объект", () => {
        assert.deepEqual(core.multiply({ a: 1 }), { a: 2 });
      });
    it("Корректно обрабатывает массив с нечисловыми значениями", () => {
      assert.deepEqual(core.multiply({ a: "a", b: 42 }), { a: "a", b: 84 });
    });
  });

  describe("#sumArr", () => {
    it("Корректно обрабатывает массив", () => {
      assert.equal(core.sumArr([1, 2, 3]), 6);
    });
  });

  describe("#isPali", () => {
    it("Корректно обрабатывает не палиндром", () => {
      assert.equal(core.isPali("баобаб"), false);
    }),
      it("Корректно обрабатывает палиндром", () => {
        assert.equal(core.isPali("дед"), true);
      });
  });
});
