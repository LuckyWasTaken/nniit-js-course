// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0,y = 0){
        this["x"] = x;
        this["y"] = y;
        this.coords_array = [x,y];
    }
    radiusVector (){
        let sum =0; 
        const {coords_array} = this;
        
        for (const key in coords_array){
            sum += Math.pow(coords_array[key], 2);
    }
    
        return Math.sqrt(sum);
    }
}
// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0,y = 0,z = 0){
        super(x,y);
        this["z"] = z;
        this.coords_array.push(z);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this._head = 1;
        this._tail = 1;
        this._queue = {};
    }
    
    getSize(){
        return this._head - this._tail;
    }

    getHead(){
        return this._queue[this._head - 1];
    }

    getTail(){
        return this._queue[this._tail];
    }
    
    enqueue(obj){
        this._queue[this._head] = obj;
        ++this._head;
    }
    
    dequeue(){
        if (this._head !== this._tail){
            let deletedItem = this._queue[this._tail];
            delete this._queue[this._tail];
            ++this._tail;
            return deletedItem;
        } else {
            return null;
        }
    }
}
    

module.exports = {
    Point,
    Point3D,
    Queue,
};
