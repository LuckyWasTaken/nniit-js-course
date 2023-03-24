// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
    
    dist(){
        return Math.sqrt(this.x**2 + this.x**2)
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {  
    
  constructor() {
    this.queue = [];
    this.len = 0;
  }
    
  push(x) {
    this.queue.push(x);
    this.len += 1;
  }
    
  pop() {
    if (this.len!=0) {
      return this.queue.shift();
      this.len -= 1;
    }
  }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
