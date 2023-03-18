//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n | 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for(let i = 2; i <= 20; i += 2){
        arr.push(i);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let s = 0;
    for(let i = 1; i <= n; ++i){
        s += i;
    }
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n === 1){
        return 1;
    }
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fac = 1;
    for (let i = 2; i <= n; ++i){
        fac *= i;
    }
    return fac;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 1){
        return true;
    }
    else if (n <= 0){
        return false;
    }
    while (n > 2){
        if (n % 2 === 0){
            n /= 2;
        }
        else{
            return false;
        }
    }
    return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n === 0){
		return 0;
    }else if(n === 1){
		return 1;
    }else{
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
