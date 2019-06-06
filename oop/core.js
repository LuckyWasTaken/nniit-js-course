// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x, y) {
    this.x = x === undefined ? 0 : x;
    this.y = y === undefined ? 0 : y;
  }
  distance() {
    return Math.sqrt(
      this.reduce(function(squares, curSquare) {
        return squares + curSquare * curSquare;
      })
    );
  }
}
// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z === undefined ? 0 : z;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
    this.queue = [];
  }
  push(newItem) {
    queue.push(newItem);
  }
  pop() {
    if (!queue.length) {
      queue.shift();
    }
  }
  front() {
    if (!queue.length) {
      return queue[0];
    }
  }
}

module.exports = {
  Point,
  Point3D,
  Queue
};
