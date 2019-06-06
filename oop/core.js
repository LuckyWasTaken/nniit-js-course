// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    get getRadius (x,y){
        return Math.sqrt(x*x+y*y);
    }

}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor (x,y,z){
        super(x,y);
        this.z = z;
    }
    getRadius(x,y,z){
        return Math.sqrt(x*x+y*y+z*z);
    }
    get Coord(){
       return [...super.Coord, this.z];
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue{
    constructor (element){
        if (element === undefined){
            this.array =[];
        }
        else{
            this.array = [element];
        }
    }
    pop(){
        if (!this.isEmpty){
            let last = this.array[0];
            this.array = this.array.slice(1);
            return last;
        }
        else{
            return NaN;
        }
    }
    push(variable){
        this.array[this.array.length] = variable;
     }
    get first(){
        return this.array[0];
    }
    get isEmpty()
    {
        return this.array.length === 0;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
