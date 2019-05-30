// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y)
    {
        this.x = (typeof(x)!= "number") ? 0 : x;
        this.y = (typeof(y)!= "number") ? 0 : y;
    }

    getDistance() {
        return Math.sqrt((this.x*this.x)+(this.y*this.y)) ;
      }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor (x,y,z) {
        super(x,y);
        this.z = (typeof(z)!= "number") ? 0 : z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
 //а можно подсказку в каком ввиде должны быть элементы?
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
