//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n){
	return (~~n) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even(){
	let first, i = 0;
	let buf = [];
	for(first = 2; first <= 20; first++){
		if(first % 2 === 0){
			buf[i] = first;
			i++;
		}
	}
	return buf;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n){
	let sum = 0;
	for(let i = 0; i <= n; i++){
		sum += i;
	}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n){
	if(n <= 0)
		return null;
	return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n){
	if(n === 0)
		return 1;
	return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n){
	if((n != 0) && ((n & (n - 1)) === 0))
		return true;
	else
		return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n){
	let a = 1, b = 1, c;
	for(let i = 3; i <= n; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
