//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let res = parseFloat(n);
    return !isNaN(n) && (res | 0) === res;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = new Array(10);
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = (i + 1) * 2;
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let res = 0;
    for (let i = 0; i <= n; ++i) {
        res += i;
    }
    return res;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 1) return n;
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
