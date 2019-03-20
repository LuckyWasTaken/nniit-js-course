//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return (n|0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	let arr = [2];
	for (i = 1; i < 10; i++){
		arr[i] = arr[i-1] + 2;
	}
	return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	let sum = 0;
	for (i = 0; i <= n; i++){
		sum += i;
	}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n === 1)
		return 1;
	else
		return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	let fact = 1;
	for (i = 1; i <= n; i++){
		fact *= i;
	}
	return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
 while (((n % 2) === 0) && n > 1)
   n /= 2;
 return (n === 1);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	function fib_iter(a, b, c)
{
	if (c == 1)
		return b;
	else
		return fib_iter(b, a + b, c - 1);
}
	return fib_iter(0, 1, n);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
