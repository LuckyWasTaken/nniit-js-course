// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
   constructor(x,y){
       if(x===undefined){
            this.x=0;
       }
       else{
        this.x=x;
       }
       if(y===undefined){
        this.y=0;
       }
        else {
            this.y=y;
       }
    }
    distance(){
        let dist=0;
        for(let key in this){
            dist+=this[key]*this[key];
        }
        return Math.sqrt(dist);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x,y,z){
        super(x,y);
        if(z===undefined){
           this.z=0;
        }
        else{
            this.z=z;
        }
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.head=undefined;
        this.tail=undefined;
    }
    push(elementForPush){
        var elem=new Node(elementForPush);
        if(this.head===undefined){
            this.head=this.tail=elem;
        }
        else{
            this.tail.next(elem);
            this.tail=elem;
        }
    }
    front(){
        if(this.head===undefined){
            return 'В очереди нет элементов!'
        }
        return this.head.value;
    }
    pop(){
        if(this.head===undefined){
            console.log('В очереди нет элементов!');
            return;
        }
        if(this.head===this.tail){
            delete(this.head);
            this.head=this.tail=undefined;
        }
        else{
            var elem=this.head.nextElem;
            delete(this.head);
            this.head=elem;
        }
    }
}
class Node{
    constructor(value){
        this.value=value;
        this.nextElem=undefined;
    }
    next(elem){
        this.nextElem=elem;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
