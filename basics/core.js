//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return (n&n) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	for(var a = [], i = 0; i < 10; a[i] = (i+1)*2, i++){}
	return a;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	for (var a = 0, i = 1; i <= n; a += i, i++){}
	return a;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	var a = n;
	if(n!=0){a += recSumTo(n-1);} 
	return a;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	for (var a = 1, i = 1; i <= n; a *= i, i++){}
	return a;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	for(var a = 2; a <= n; a *= 2){if (a == n){return true;}}
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
	if (n>2){
		return fibonacci(n-1)+fibonacci(n-2);
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
