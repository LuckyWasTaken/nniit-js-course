// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  //вычисляет расстояние от точки до центра
  distanceToCenter() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  //вычисляяет расстояние между двумя точками
  static distanceBetweenPoints(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
  
  //возвращает строковое представление точки
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x = 0, y = 0, z = 0) {
    super(x, y);
    this.z = z;
  }

  //вычисляет расстояние от точки до центра
  distanceToCenter() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  //вычисляяет расстояние между двумя точками
  static distanceBetweenPoints(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const dz = point2.z - point1.z;
    return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  }

  //возвращает строковое представление точки
  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor() {
	this._size = 0;
    this._head = null;
    this._tail = null;
  }

  enqueue(value) {
    const node = { value, next: null };

    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._size++;
  }

  dequeue() {
    if (this._head === null) {
      return null;
    }

    const value = this._head.value;
    this._head = this._head.next;
    this._size--;

    if (this._head === null) {
      this._tail = null;
    }

    return value;
  }

  get size() {
    return this._size;
  }
  
  // возвращает все элементы очереди в виде массива
  toArray() {
    const result = [];

    let currentNode = this._head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}
module.exports = {
    Point,
    Point3D,
    Queue,
};