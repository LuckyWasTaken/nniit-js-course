var assert = require('assert'),
    core   = require('./core');

describe('Первое задание', () => {
    describe('#isInteger', () => {
        it('Возвращает true на целое число', () => {
            assert.equal(core.isInteger(3), true);
        }),
        it('Возвращает false на нецелое число', () => {
            assert.equal(core.isInteger(1.2), false);
        })
    })

    describe('#even', () => {
        it('Возвращает корректный массив', () => {
            assert.deepEqual(core.even(), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        })
    })

    describe('#sumTo', () => {
        it('Возвращает сумму чисел до n', () => {
            assert.equal(core.sumTo(4), 10, 'С маленьким числом');
            assert.equal(core.sumTo(100), 5050, 'С большим числом');
        })
    })

    describe('#recSumTo', () => {
        it('Возвращает сумму чисел до n', () => {
            assert.equal(core.recSumTo(4), 10, 'С маленьким числом');
            assert.equal(core.recSumTo(100), 5050, 'С большим числом');
        })
    })

    describe('#factorial', () => {
        it('Возвращает факториал n', () => {
            assert.equal(core.factorial(5), 120);
            assert.equal(core.factorial(4), 24);
        })
    })
})