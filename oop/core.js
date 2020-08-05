// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    getDistanceFromZero(){
        return (Math.sqrt(this.x ** 2 + this.y ** 2)).toFixed(2);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0){
        super(x,y);
        this.z = z;
    }

    getDistanceFromZero(){
        return (Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)).toFixed(2);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(...args){
        this._database = args;
    }

    getDatabase(){
        return this._database;
    }

    addItem(item){
        this._database.push(item);
    }
    
    moveQueue(){
        return this._database.shift();
    }


}

module.exports = {
    Point,
    Point3D,
    Queue,
};
