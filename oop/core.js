// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y)
        this.z = z
    }
    
    distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    #items
    #frontIndex
    #backIndex

    constructor() {
        this.#items = {}
        this.#frontIndex = 0
        this.#backIndex = 0
    }

    enqueue(item) {
        this.#items[this.#backIndex++] = item 
    }

    dequeue() {
        const item = this.#items[this.#frontIndex]
        delete this.#items[this.#frontIndex++]
        return item
    }

    peek() {
        return this.#items[this.#frontIndex]
    }

    printItems() {
        return this.#items
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
