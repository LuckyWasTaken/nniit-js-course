// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    getDistance() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
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
        this.container = [];
    }

    print() {
        console.log(this.container);
    }

    isEmpty() {
        return this.container.length === 0;
    }

    add(element) {
        this.container.push(element);
    }

    remove() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        return this.container.shift();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};