// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y) {
        this.x = x||0;
        this.y = y||0;
    }

    dest() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z||0;
    }

    dest() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
function Data(obj) {
    this.obj = obj;
    this.prev = null;
    this.next = null;
    toString = function () {
        return this.obj;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    front() {
        if (this.size > 0) {
            return this.head.obj;
        } else {
            return null;
        }
    }

    back() {
        if (this.size > 0) {
            return this.tail.obj;
        } else {
            return null;
        }
    }

    push_back(obj) {
        let data = new Data(obj);
        if (this.size === 0) {
            this.head = data;
            this.tail = data;
            this.size++;
        } else {
            data.next = null;
            data.prev = this.tail;
            this.tail.next = data;
            this.tail = data;
            this.size++;
        }
    }

    push_front(obj) {
        let data = new Data(obj);
        if (this.size === 0) {
            this.head = data;
            this.tail = data;
            this.size++;
        } else {
            data.prev = null;
            data.next = this.head;
            this.head.prev = data;
            this.head = data;
            this.size++;
        }
    }

    pop_front() {
        if (this.size === 0) {
            console.log("queue is empty");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    pop_back() {
        if (this.size === 0) {
            console.log("queue is empty");
            return;
        }
        this.tail = this.tail.prev;
        this.size--;
    }

    length() {
        return this.size;
    }
}


module.exports = {
    Point,
    Point3D,
    Queue,
};


