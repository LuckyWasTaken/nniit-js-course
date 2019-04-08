//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = 2 * (i + 1);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) return 1;
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let num = Math.log2(n);
    return Number.isInteger(num);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
