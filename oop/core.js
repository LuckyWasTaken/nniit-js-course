// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0){
        if(isFinite(x)){
            this.x = x;
        }
        if(isFinite(y)){
            this.y = y;
        }
    }
    get distanceFromCenter() {
        let sumOfSquares = 0;
        for (let key in this){
            sumOfSquares += Math.pow(this[key], 2);
        }
        return Math.sqrt(sumOfSquares);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z = 0){
        super(x, y);
        if(isFinite(z)){
            this.z = z;
        }
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this._array = [];
        this._size = 0;
    }
    push(elem){
        this._array.push(elem);
        this._size++;
    }
    get pop(){
        if(this._size){
            this._size--;
            return this._array.shift();
        }
        return undefined;
    }
    get top(){
        return test._array[0];
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
