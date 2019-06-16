//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return ((n | 0) === n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	let arr = [], index = 0;
	for (num = 2; num <= 20; num++) {
		if (!(num % 2)){
			arr[index] = num;
			index++;
		}
	}
	return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	let sum = 0;
	for (i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n > 1) {
		return recSumTo (n-1) + n;
	}
	return 1;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	let product = 1;
	if (n >= 0) {
		for (i = 1; i <= n; i++) {
			product *= i;
		}
		return product;
	}
	return 0;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	if (n < 1) {
		return false;
	}
	let binary = 1;
	while (binary < n) {
		binary *= 2;
		if (binary > n) {
			return false;
		}
	}
	return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	if (n < 3) {
		return 1;
	}
	let fiboPrev = 1;
	let fiboCurrent = 1;
	for (i = 3; i <= n; i++) {
		fiboCurrent += fiboPrev;
		fiboPrev = fiboCurrent - fiboPrev;
	}
	return fiboCurrent;
}

module.exports = {
	isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
