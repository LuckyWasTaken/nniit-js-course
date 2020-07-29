// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0,y=0){  //constructor is function => can use argv with default value
        this.x=x;
        this.y=y;
    }

    getHypotenuse(){
        return Math.sqrt((Math.pow(this.x,2)+Math.pow(this.y,2)));
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x=0,y=0,z=0){
        super(x,y);
        this.z=z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.queue=[]; // Array
    }

    addElementToTail(element){
        this.queue.push(element);
    }

    getElementFromHead(){
        return this.queue.shift(); //get and delete element, if only get: return this.queue[0]
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
