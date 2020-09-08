// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    centrOfCoord() {
        return Math.round(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.x, 2)))
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0){
        super(2)
        this.z = z
        this.y = y
        this.x = x
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.arr = [];
      }
      addElement(e){
        this.arr.push(e)
        this.arr.reverse()
      }
    
      getElement(){
        return this.arr[0]
      }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
