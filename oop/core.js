// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    findDistanseBetweenPointAndCenter() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z = 0) {
        super(x, y);

        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this.queue = new Map();
        this.firstElementIndex = 0;
        this.lastElementIndex = 0;
    }

    enqueue(element) {
        this.queue.set(this.lastElementIndex, element);
        this.lastElementIndex++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }

        let element = this.queue.get(this.firstElementIndex);
        this.firstElementIndex++;
        
        return element;
    }

    isEmpty() {
        return this.queue.size() === 0;
    }

    getLength() {
        return this.queue.size();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
