// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        if (y == null) {
            if (x == null) {
                this.x = 0;
            } else {
                this.x = x;
            }
            this.y = 0;
            return;
        }
        this.x = x;
        this.y = y;
    }

    get startDistance() {
        return Math.sqrt(Math.abs(this.x) ** 2 + Math.abs(this.y) ** 2);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        if (z == null) {
            this.z = 0;
        } else {
            this.z = z;
        }
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this.queue = [];
    }

    enque(a) {
        this.queue.push(a);
    }

    dequeue() {
        this.queue.shift();
    }

    get get() {
        return this.queue;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
