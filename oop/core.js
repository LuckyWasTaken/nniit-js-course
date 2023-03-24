// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    distanceBetweenCenter() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }
  
  // Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
  // который будет наследоваться от точки в двумерном пространстве
  class Point3D extends Point {
    constructor(x, y, z = 0) {
      super(x, y);
      this.z = z;
    }
  
    distanceBetweenCenter() {
      return Math.sqrt(
        Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
      );
    }
  }
  
  // Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
  class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
  }
  
  module.exports = {
    Point,
    Point3D,
    Queue,
  };