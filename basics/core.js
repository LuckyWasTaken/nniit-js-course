//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n%1 === 0
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var arr = new Array;
    for(var i = 2; i <= 20; i += 2) {
        arr.push(i);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var sum = n;
    for(var i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    var sum = n;
    if(n!=0)
        sum += recSumTo(n-1);
    return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    var i = 1;
    while(i < n) {
        i *= 2;
    }
    if(i == n) {
        return true;
    }
    else {
        return false;
    }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n==1 || n==2){
		return 1;
	}
	if (n>2){
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
