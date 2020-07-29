// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        this.x = x ? x : 0
        this.y = y ? y : 0
    }
    
    toCenter = function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y)
        this.z = z ? z : 0
    }

    toCenter() {
        return Math.sqrt(super.toCenter() ** 2 + this.z ** 2)
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this.queue = []
    }
    push(a) {
        this.queue.push(a)
    }
    pull() {
        return this.queue.shift()
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
