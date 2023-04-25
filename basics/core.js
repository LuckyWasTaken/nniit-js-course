//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return((n | 0) === n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	var array = [];
	for (let i = 2; i <= 20; i = i + 2) {
		array.push(i);
	}
	return(array);
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	var sum = 0;
	for (let i = 1; i <= n; ++i) {
		sum += i;
	}
	return(sum);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n === 0) { return(0); }
	return(n + recSumTo(n - 1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	if (n === 0) { return(1); }
	var variable = 1;
	for (let i = 1; i <= n; ++i) {
		variable *= i;
	}
	return(variable);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	if (n <= 0) {
		return(false);
	}
	while (n > 1) {
		if (n % 2 !== 0) {
			return(false);
		}
		n /= 2;
	}
	return(true);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	if (n <= 1) {
		return(n);
	}
	return( fibonacci(n - 1) + fibonacci(n - 2) );
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
