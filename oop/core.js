// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point 
{
    constructor(x,y)
    {
           if(parseFloat(x) === x) this.x = x; else this.x = 0;
           if(parseFloat(y) === y) this.y = y; else this.y = 0;
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point 
{
    constructor(x,y,z)
    {
        super(x,y);
        if(parseFloat(z) === z) this.z = z; else this.z = 0;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue 
{
    constructor()
    {
        this._queue = [];
    }

    set queue(value)
    {
        this._queue.push(value);    
    }

    get queue()
    {
        if (this._queue.length > 0)
        {
            //let _queueBufer = this._queue[0];
            //this._queue.splise(1,1);
            return this._queue.splice(0,1);
        }
        else
        {
            return null;
        }
    }

}

module.exports = {
    Point,
    Point3D,
    Queue,
};
