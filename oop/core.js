// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    calcRadiusVector(){
        let sumOfSquares = 0;
        for (let value of Object.values(this)){
            sumOfSquares += value ** 2;
        }
        return Math.sqrt(sumOfSquares);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z=0){
        super(x, y);
        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    #data;
    #front;
    #back;
    
    constructor() {
        this.#data = [];
        this.#front = 0;
        this.#back = 0;
    }
    
    // Если очередь пустая, возвращаем true, иначе - false
    isEmpty(){
        return this.#back === this.#front;
    }
    
    // Возврашаем количество элементов в очереди
    size(){
        return this.#back - this.#front;
    }
    
    // Добавляем элемент в конец очереди
    enqueue(el){
        this.#data.push(el);
        this.#back += 1;
    }
    
    // Если очередь непустая,
    // удаляем элемент из её начала и возвращаем этот элемент.
    // Иначе возвращаем null
    pop(){
        if (!this.isEmpty()){
            const el = this.#data[this.#front];
            this.#front += 1;
            return el;
        }
        return null;
    }
    
    // Если очередь непустая, возвращаем её начальный элемент.
    // Иначе возвращаем null
    getFrontElement(){
        if (!this.isEmpty()){
            return this.#data[this.#front];
        }
        return null;
    }
    
    // Если очередь непустая, возвращаем её последний элемент.
    // Иначе возвращаем null
    getBackElement(){
        if (!this.isEmpty()){
            return this.#data[this.#back - 1];
        }
        return null;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
