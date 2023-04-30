var assert = require("assert"),
    core = require("./core");

describe("Замыкания", () => {
    describe("#sum", () => {
        it("Корректно отрабатывает", () => {
            assert.equal(core.sum(2)(3), 5);
        });

        it('Работает на любом количестве чисел', () => {
            assert.equal(core.sum(2)(3)(4)(5), 15)
        })
    });

    describe("#average", () => {
        it("Корректно отрабатывает", () => {
            const avg = core.average();

            assert.equal(avg(2), 2);
            assert.equal(avg(4), 3);
        });
    });
});
