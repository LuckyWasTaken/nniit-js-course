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

        it('Расстояние от точки до (0, 0)', () => {
            const point = new core.Point(6, 9);

            assert.equal(point.distanceToOrigin().toFixed(6), 10.816654);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с одним параметром, который становится x, y и z принимают нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1);

            assert.equal(point.x, 1);
            assert.equal(point.y, 0);
            assert.equal(point.z, 0);
        });

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

        it('Расстояние от точки до (0, 0, 0)', () => {
            const point = new core.Point3D(8, 0, 8);

            assert.equal(point.distanceToOrigin().toFixed(6), 11.313708);
        });
    });

    describe('#Queue', () => {
        it('Тесты для очереди', () => {
            const q = new core.Queue();

            q.enqueue(1);
            q.enqueue(2.222);
            q.enqueue("3");
            q.enqueue("aboba");

            q.dequeue();
            
            assert.equal(q.size(), 3);

            q.enqueue("afffff");

            assert.equal(q.dequeue(), 2.222);

            assert.equal(q.size(), 3);

            assert.equal(q.isEmpty(), false);

            while (q.size() != 0) {
                q.dequeue();
            }

            assert.equal(q.isEmpty(), true);

            assert.equal(q.dequeue(), undefined);
        });
    });
});
