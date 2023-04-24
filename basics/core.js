//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return(((n ^ 0) == n && n != '') ? true : false)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	let evenArray = new Array()
	for (let i = 2; i < 21; i+=2) {
		evenArray.push(i)
	}
	return evenArray
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	let sum = 0
	for (let i = 1; i <= n;i++) {
		sum += i
	}
	return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n == 0) {
		return 0
	} else {
		return n + recSumTo(n-1)
	}
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	let res = 1;
	for (let i = 2; i <= n;i++) {
		res *= i
	}
	return res;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	while (n != 1) {
		if (n % 2 != 0) {
			return false
		}
		n /= 2
	}
	return true
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	if (n == 1 || n == 2) {
		return 1
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
