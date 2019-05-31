// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z || 0;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this._store = [];
    }

    set add(value) {
        this._store.push(value);
    }

    get get() {
        return this._store.pop();
    }
}

const queue = new Queue();
queue.add = 1;
queue.add = 2;
queue.add = 3;
queue.get;
queue.get;
queue.get;

module.exports = {
    Point,
    Point3D,
    Queue,
};

