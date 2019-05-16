class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

class Point3D extends Point {
  constructor(x, y, z = 0) {
    super(x, y);
    this.z = z;
  }
  
  distance() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
  }
}

class Queue {
  constructor() {
    this._arr = [];
  }

  addToEnd(elem) {
    this._arr.push(elem);
  }

  getFirst() {
    return this._arr.shift();
  }
}
