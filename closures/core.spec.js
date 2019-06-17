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

      assert.equal(core.average(2), 2);
      assert.equal(core.average(4), 3);
      assert.equal(core.average(12), 6);
    });
  });
});
