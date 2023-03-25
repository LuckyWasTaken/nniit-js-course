// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    vector() {
        return Math.sqrt(Math.pow(this.x) + Math.pow(this.y))
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z=0){
        super(x, y);
        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this.elems = {};
        this.first = 0;
        this.last = 0;
    }
    enqueue(a) {
        this.elems[this.last] = a;
        this.last++;
    }
    dequeue() {
        const item = this.elems[this.first];
        delete this.elems[this.first];
        this.first++;
        return item;
    }
    peek() {
        return this.elems[this.first];
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
