// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  distanceToСenter() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x, y, z = 0) {
    super(x, y)
    this.z = z
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.items.shift()
  }
  isEmpty() {
    return this.items.length === 0
  }
}

module.exports = {
  Point,
  Point3D,
  Queue,
}
