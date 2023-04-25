// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
	x
	y

	// constructor() {
	// 	this.x = 0
	// 	this.y = 0
	// }

	constructor(x = 0, y = 0) {
		this.x = x
		this.y = y
	}

	distance() {
		return sqrt((pow(x, 2) + pow(y, 2)))
	}
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
	z

	constructor(x, y, z = 0) {
		super(x, y)
		this.z = z
	}
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
	arr

	constructor() {
		this.arr = []
	}

	push(el) {
		this.arr = this.arr.concat([el])
	}

	pop() {
		if (this.arr.length <= 0) {
			throw new Error("Queue is already empty!")
		}
		let first = this.arr[0]
		this.arr = this.arr.slice(1, this.arr.length)
		return first
	}
}

let qu = new Queue()
console.log(qu)
qu.push("lol")
qu.push("kek")
qu.push("kjl")
console.log(qu)
console.log(qu.pop())
console.log(qu)
console.log(qu.pop())
console.log(qu)
console.log(qu.pop())
console.log(qu)
console.log(qu.pop())

module.exports = {
    Point,
    Point3D,
    Queue,
};
