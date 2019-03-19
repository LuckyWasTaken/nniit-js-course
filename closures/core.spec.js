var assert = require("assert"),
  core = require("./core");

describe("Замыкания", () => {
  describe("#sum", () => {
    it("Корректно отрабатывает", () => {
      assert.equal(core.sum(2)(3), 5);
    });
  });

  describe("#average", () => {
    it("Корректно отрабатывает", () => {
      const avg = core.average();

      assert.equal(avg(2), 2);
      assert.equal(avg(4), 3);
    });
  });
});
