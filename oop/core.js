class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
}
}

class Point3D extends Point {
    constructor(x, y, z = 0) {
        super(x,y);
        this.z = z;
}
}

class Queue {
    constructor() {
        this.arr = [];
      }
      setToEnd(element) {
        this.arr.push(element);
      }
      getFromStart() {
        return this.arr.shift();
      }
    }

module.exports = {
    Point,
    Point3D,
    Queue,
};
