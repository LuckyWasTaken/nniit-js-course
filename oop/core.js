// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    };

    distance()
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
};

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point
{
    constructor(x = 0, y = 0, z = 0)
    {
        super(x, y);
        this.z = z;
    };

    distance()
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
};

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue
{
    constructor()
    {
        this._length = 0;
        this._head = null;
        this._tail = null;
    };

    enqueue(item)
    {
        var container =
        {
            item: item,
            nextContainer: null
        };

        if (this._length > 0)
            this._tail.nextContainer = container;
        if (this._length == 0)
            this._head = container;

        this._tail = container;
        this._length++;
    };

    dequeue()
    {
        var container = this._head;

        if (this._length == 0)
            return null;
        if (this._length == 1)
            this._tail = null;

        this._head = container.nextContainer;
        this._length--;

        return container.item;
    };

    peek()
    {
        return this._head.item;
    };

    get length()
    {
        return this._length;
    };
};

module.exports =
{
    Point,
    Point3D,
    Queue,
};
