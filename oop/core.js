// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x = 0, y = 0) {
    this._array = [];
    this._array.push(x);
    this._array.push(y);
    this.x = x;
    this.y = y;
  }
  distance() {
    return Math.sqrt(
      this._array.reduce(function(squares, curSquare) {
        return squares + curSquare * curSquare;
      })
    );
  }
}
// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y);
    this._array.push(z);
    this.z = z;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
    this._queue = [];
  }
  push(newItem) {
    this._queue.push(newItem);
  }
  isEmpty() {
    return this._queue.length === 0;
  }
  pop() {
    if (!this._queue.isEmpty()) {
      return this._queue.shift();
    }
  }
}

module.exports = {
  Point,
  Point3D,
  Queue
};
