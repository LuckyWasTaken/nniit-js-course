//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n & n) === n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = new Array();

    for (let i = 2; i <= 20; i += 2) {
        arr.push(i)
    }

    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 0) {
        return 0
    }

    return n + recSumTo(n - 1)
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while (n > 1) {
        if (n % 2 === 0)
            n /= 2;
        else
            return false
    }

    return n === 1
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let value = 1
    let last_value = 0

    for (let i = 1; i < n; i++) {
        value += last_value
        last_value = value - last_value
    }

    return value
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
