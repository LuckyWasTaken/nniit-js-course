// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    distance(poin){
        return Math.sqrt(Math.pow(poin.x, 2) + Math.pow(poin.y, 2))
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z = 0){
        super(x, y);
        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this.data = {};
        this.firstIndex = 0;
        this.lastIndex = 0;
    }
    push(value) {
        this.data[this.lastIndex] = value
        this.lastIndex++
    }
    pop() {
        const item = this.data[this.firstIndex]
        delete this.data[this.firstIndex]
        this.firstIndex++
        return item
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
