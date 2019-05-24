// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {

    constructor(x,y)
    {
        if (x == undefined)
        {
           x = 0;
        }
        if (y == undefined)
        {
            y = 0;
        }       

        this.x = x;
        this.y = y;
    }

    getLenght()
    {      
        var lenght = Math.sqrt(this.x*this.x + this.y*this.y);
        return lenght;
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point 
{
    constructor(x,y,z)
    {
        super(x,y);
        if (z == undefined)
        {
            z = 0;          
        }
        this.z = z;  
    }
    
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue
{
    constructor(qArray)
    {
        this.qArray = qArray;
    }

    set lastElement(le) 
    {
      this.qArray.push(le);
    }

      get firstElement() 
      {
        return this.qArray.shift();
      }
    }

module.exports = {
    Point,
    Point3D,
    Queue,
};
