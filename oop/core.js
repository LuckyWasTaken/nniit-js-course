// Напишите класс геометрической точки, принимающей в конструкторе координаты x и y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point 
{
    constructor(x=0,y=0)
    {
        this.x=x;
        this.y=y;
    }
    getDistance()
    {
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point 
{
    constructor(x=0,y=0,z=0)
    {
        super(x,y)
        this.z=z
    }
    getDistance()
    {
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2))
    }
}
class Node
{
    previous;
    next;
    constructor(val)
    {
        this.val=val;
    }
}
// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue 
{
    first;
    last;
    add(node)
    {
        if(this.first==undefined && this.last==undefined)
        {
            this.first=this.last=node;
        }
        else
        {
            this.last.next=node;
            this.last=node;
        }
    }
    remove()
    {
        if(this.first==undefined)
        {
            return undefined;
        }
        else
        {
            var result=this.first;
            if(this.first!=this.last)
            {
                this.first=this.first.next;
                this.first.previous=undefined;
            }
            else
            {
                this.first=this.last=undefined;
            }
            return result;
        }
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};