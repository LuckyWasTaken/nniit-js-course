//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n & n) === n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [...Array(10).keys()].map(x => (x + 1) * 2)
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    return n === 0 ? 0 : n + recSumTo(n - 1)
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while (n > 1) {
        if (n % 2 === 0) n /= 2; else return false
    }

    return n === 1
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        b = a + b
        a = b - a
    }

    return b
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
