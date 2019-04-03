// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x, y) {
    if (typeof x == "number") {
      this.x = x;
    } else {
      this.x = 0;
    }
    if (typeof y == "number") {
      this.y = y;
    } else {
      this.y = 0;
    }
  }
  distCenter() {
    if (this.x == 0 && this.y == 0) {
      return 0;
    }
    let distance = Math.sqrt(this.x * this.x + this.y * this.y);
    return distance;
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    if (typeof z == "number") {
      this.z = z;
    } else {
      this.z = 0;
    }
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
    this.arr = [];
  }
  inQueue(element) {
    this.arr.push(element);
  }
  outQueue() {
    return this.arr.shift();
  }
}

module.exports = {
  Point,
  Point3D,
  Queue
};
