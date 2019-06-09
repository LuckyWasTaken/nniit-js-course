// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
   constructor(x=0,y=0){
       this._x=x;
       this._y=y;
       let _coord=new Map([['x',this._x],['y',this._y]]); 
       this._coord=_coord; // без этого _coord не входил в this Point3D, а как сделать по-другом не нашел
    }
    distance(){
        let dist=0;
        for(let [key,value] of this._coord){
            dist+=value*value;
        }
        return Math.sqrt(dist);
    }
    set x(value){
        this._x=value;
        this._coord.set('x',value);
    }
    get x(){
        return this._x;
    }
    set y(value){
        this._y=value;
        this._coord.set('y',value);
    }
    get y(){
        return this._y;
    }
    //такая реализация оказалась очень нагроможденной (из-за необходимости поддерживать изменения в _coord).
    // Намного проще было бы distance считать 
    //формулой math.sqrt((this.x)*(this.x)+(this.y)*(this.y)), 
    //а в Point3D переопределить ее на math.sqrt((this.x)*(this.x)+(this.y)*(this.y)+(this.z)(this.z)) ¯\_(ツ)_/¯
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x,y,z=0){
        super(x,y);
        this._z=z;
        this._coord.set('z',this._z);
    }
    set z(value){
        this._z=value;
        this._coord.set('z',value);
    }
    get z(){
        return this._z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this._head=null;
        this._tail=null;
    }
    push(elementForPush){
        let elem=new Node(elementForPush);
        if(this._head===null){
            this._head=this._tail=elem;
        }
        else{
            this._tail.nextElem=elem;
            this._tail=elem;
        }
    }
    front(){
        if(this._head===null){
            console.log('В очереди нет элементов!');
            return null
        }
        return this._head.value;
    }
    pop(){
        if(this._head===null){
            console.log('В очереди нет элементов!');
            return;
        }
        if(this._head===this._tail){
            delete(this._head);
            this._head=this._tail=null;
        }
        else{
            let elem=this._head.nextElem;
            delete(this._head);
            this._head=elem;
        }
    }
}

class Node{
    constructor(value){
        this._value=value;
        this._nextElem=null;
    }
    get value(){
        return this._value;
    }
    set nextElem(elem){
        this._nextElem=elem;
    }
    get nextElem(){
        return this._nextElem;
    }
}

 //let q=new Queue();
 //q.pop();
// q.push(1);
// q.push(2);
// q.push(3);
// console.log(q.front());
// q.pop();
// console.log(q.front());
// q.pop();
// console.log(q.front());
// q.pop();
// console.log(q.front());
// q.pop();
// q.push(1488);
// console.log(q.front());
// q.pop(); 
// console.log(q.front());

module.exports = {
    Point,
    Point3D,
    Queue,
};
