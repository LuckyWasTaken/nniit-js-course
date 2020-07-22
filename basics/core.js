//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n == (n & ~0)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0
    for (let num = 1; num <= n; num++) {
        sum += num;
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0) {
        return 0
    }
    return n + recSumTo(n - 1) 
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fac = 1
    for (let num = 2; num <= n; num++) {
        fac *= num
    }
    return fac
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while (n != 0 || n != 1) {
        n /= 2
    }
    return !n
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let first = 0
    let second = 1
    let fib = 0
    if (n >= 3) {
        for (let index = 3; index < n; index++) {
            fib = first + second
            first = second
            second = fib
        }
        return fib
    } else if (n == 1) {
        return first
    } else if (n == 2) {
        return second
    } else {
        return 0
    }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
