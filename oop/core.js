// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0,y = 0){
        this["x"] = x;
        this["y"] = y;
    }
    radiusVector (){
        let sum =0; 
        const obj = this;
        
        for (const key in obj){
            sum += Math.pow(obj[key], 2);
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
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.head = 1;
        this.tail = 1;
        this.queue = {};
    }
    
    getSize(){
        return this.head - this.tail;
    }

    getHead(){
        return this.queue[this.head - 1];
    }

    getTail(){
        return this.queue[this.tail];
    }
    
    enqueue(obj){
        this.queue[this.head] = obj;
        ++this.head;
    }
    
    dequeue(){
        if (this.head != this.tail){
            let deletedItem = this.queue[this.tail];
            delete this.queue[this.tail];
            ++this.tail;
            return deletedItem;
        } else {
            return "Queue is empty";
        }
    }
}
    

module.exports = {
    Point,
    Point3D,
    Queue,
};
