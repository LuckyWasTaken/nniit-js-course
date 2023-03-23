// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Метод для вычисления расстояния от точки до центра координат
    distanceToCenter() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    distanceToCenter() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor() {
        // Эт имплементация двусвязного списка, для работы методов за O(1). Чисто на массиве `pop` бы работал за O(n) 
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(element) {
        const node = { value: element, prev: null, next: null };

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    pop() {
        if (!this.head) {
            return;
        }

        const node = this.head;
        this.head = node.next;
        if (!this.head) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        this.size--;
        return node.value;
    }
}


module.exports = {
    Point,
    Point3D,
    Queue,
};
