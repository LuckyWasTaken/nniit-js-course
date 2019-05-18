//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return (n&n) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	var array = [];
	for(var i = 0; i < 10; i++){
		array[i] = (i+1)*2;
	}
	return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	for (var sum = 0, i = 1; i <= n; sum += i, i++){}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n !== 0){
		return n+recSumTo(n-1);
	}
	return 0;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	for (var intResult = 1, i = 1; i <= n; intResult *= i, i++){}
	return intResult;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	for(var intCurrent = 2; intCurrent <= n; intCurrent *= 2){
		if (intCurrent == n){
			return true;
		}
	}
	return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	if (n==1){
		return 0;
	}
	if(n==2){
		return 1;
	}
	return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
