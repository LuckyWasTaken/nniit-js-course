var assert = require('assert');
var core = require('./core');

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.equal(point.x, 1);
            assert.equal(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.equal(point.x, 0);
            assert.equal(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.equal(point.x, 1);
            assert.equal(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.equal(point.x, 1);
            assert.equal(point.y, 2);
            assert.equal(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.equal(point.x, 1);
            assert.equal(point.y, 2.5);
            assert.equal(point.z, -3);
        });
    });

    describe('#Queue', () => {
        it('возвращает корректный размер, если элемент был удален из очереди', () => {
            const queue = new core.Queue();
            queue.enqueue(123);
            queue.enqueue("hello");
            queue.enqueue([1,2,3]);
            queue.dequeue();
            assert.equal(queue.getSize(),2);
        });
        it('нельзя удалить элемент из пустой очереди', () => {
            const queue = new core.Queue();
            assert.equal(queue.dequeue(),null);
        });
    });
});
