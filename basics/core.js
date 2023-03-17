//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n)
{
	return n === (n ^ 0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even()
{
	let arr = [];
	for (let i = 2; i < 21; i += 2)
	{
		arr.push(i);
	}
	return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n)
{
	let sum = 0;
	while(n > 0)
	{
		sum += n;
		n -= 1;
	}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n)
{
	return (n > 0 ? n + recSumTo(n-1) : 0);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n)
{
	return (n > 0 ? n * factorial(n-1) : 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n)
{
	return (n != 0 ? (n & (n-1)) === 0 : false)
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n)
{
	switch(n)
	{
		case 0:
			return 0;
			break;
		case 1:
			return 1;
			break;
		default:
			return fibonacci(n-1) + fibonacci(n-2);
			break;
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
