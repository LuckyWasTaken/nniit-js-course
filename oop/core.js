// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(px =0,py=0)
    {
        this.x = px;
        this.y = py;
    }
}
// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(px = 0,py = 0, pz =0)
    {
        super(px,py);
        this.z = pz;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
     obj = [];
    Push(El)
    {
        this.obj[this.obj.length] = El;
        return;
    }
    Pop()
    {
        if(this.obj.length ==0)
        return null;
        var oldEL;
        oldEL = this.obj[0];
        this.obj.splice(0,1);
        return oldEL;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
