// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
  constructor(x,y){
    let [xx=0,yy=0]=[x,y];
    this.x=xx;
    this.y=yy;
  }
  getDistance(){
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
  constructor(x,y,z){
    super(x,y);
    this.z=(z)?z:0;
  }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
  constructor(){
    this.queueArray=[];
  }
  get myFoo() {
    return this.queueArray.shift();
  }
  // сеттер
  set myFoo(elem) {
      this.queueArray.push(elem);
  }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
