// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        if (typeof y === 'undefined') {
            if (typeof x === 'undefined') {
                this.x = 0
                this.y = 0
            } else {
                this.x = x
                this.y = 0
            }
        } else {
            this.x = x
            this.y = y
        }
    }

    distant2Center () {
        return Math.sqrt((this.x-0)**2 + (this.y-0)**2)
    }

}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {

    constructor(x, y, z = 0) {
        super(x, y);
        this.z = z
    }

}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(arr = []) {
        this.queue = arr
    }

    pushQueue(elem) {
        this.queue.push(elem)
    }

    popQueue() {
        return this.queue.shift()
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
