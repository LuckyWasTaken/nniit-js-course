// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
    distance_from_center(x, y){
        this.x=x;
        this.y=y;
        let result = Math.sqrt((this.x*this.x)+(this.y*this.y))
        return result;
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
   constructor(x=0, y=0, z=0){
       super(x, y);
       this.z=z;
   }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.massiv = [];
    }
    in_queue(element){
        this.massiv.push(element);
    }
    delete_element_queue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.massiv.shift();
    }
    return_first_element(){
        if(this.isEmpty()){
            return "No elements";
        }
        return this.massiv[0];
    }
    isEmpty(){
        return this.massiv.length === 0;
    }
    my_print_Queue(){
        let str = "";
        for(let i = 0; i < this.massiv.length; i++){
            str += this.massiv[i]+"  ";
        }
        return str;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
