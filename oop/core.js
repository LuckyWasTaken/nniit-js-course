// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point 
{
    constructor(x,y)
    {
        let [pointX=0,pointY=0]=[x,y];
        this.x = pointX;
        this.y = pointY;
    }

    findDistanse( )
    {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }

}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point 
{
    constructor(x,y,z)
    {
        let [pointZ=0]=[z];
        super(x,y);
        this.z=pointZ;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue 
{
    constructor()
    {
        this.queue = [];
    }
    popElement=function()
    {
       return this.queue.shift();
    }
    pushElement=function(word)
    {
       this.queue.push(word);
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};

