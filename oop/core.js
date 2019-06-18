// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(coordX = 0,coordY = 0){
        this.x = coordX;
        this.y = coordY;
        }
        distanceFromCenter(){
            return Math.sqrt((this.x*this.x) + (this.y*this.y));
        }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(coordX = 0,coordY = 0,coordZ = 0){
        super(coordX,coordY);
        this.z = coordZ;
        }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
   storage = [];

    push(data) {
        this.storage[this.storage.length] = data;
        return;
    }

    pop(){
        if(this.storage.length == 0){
            return "no elements";
        } else {
        var theOldestElement = this.storage[0];
        this.storage.splice(0,1);
        return theOldestElement;
        }
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
