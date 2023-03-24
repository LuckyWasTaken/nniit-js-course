// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z=0){
        super(x, y);
        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    
    constructor() {
        this.data = [];
        this.front = 0;
        this.back = 0;
    }
    
    // Добавляем элемент в конец очереди
    enqueue(el){
        this.data.push(el);
        this.back += 1;
    }
    
    // Удаляем элемент из начала очереди и возвращаем его
    pop(){
        const el = this.data[this.front];
        this.front += 1;
        return el;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
