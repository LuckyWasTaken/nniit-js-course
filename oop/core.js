// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(xCoordinate, yCoordinate) {
        this.x = xCoordinate;
        this.y = yCoordinate;
    }

    distanceToTheCenterOfCoordinates() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(xCoordinate, yCoordinate, zCoordinate){
        super(xCoordinate, yCoordinate);
        this.z = zCoordinate;
    }
    distanceToTheCenterOfCoordinates() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        this._queueArray = [];
    }
    push(elementToPush) {
        this._queueArray.push(elementToPush); //возможна реализация через _queueArray[_queueArray.length] = elemetToPush, чтобы не копировать в наглую то, что уже сделали до нас
    }
    front() {
        if (!this.isEmpty()) {
            return this._queueArray[0];
        }
    }
    pop() {
        if (!this.isEmpty()) {
            this._queueArray.shift();
        }
    }
    isEmpty() {
        if (this._queueArray.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}//реализую плюсовый функционал, в котором удаление из начала и взятие первого разными функциями осуществяется
//Это прикольно, можно брать первый элемент, не царапая очередь

module.exports = {
    Point,
    Point3D,
    Queue,
};
