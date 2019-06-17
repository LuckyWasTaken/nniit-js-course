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
        it('Находит расстояние между точкой и центром координат', () => {
            const point = new core.Point(12, 5);

            assert.equal(core.Point.prototype.Distance(point.x,point.y), 13);
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
});
