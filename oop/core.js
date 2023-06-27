// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculateDistanceToCenter() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
    this.queue = [];
  }

  push(element) {
    this.queue.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
