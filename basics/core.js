// Напишите функцию, которая проверяет, 
// является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n | 0) === n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [...Array(10).keys()].map(item => (item + 1) * 2)
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; ++i) {
        sum += i
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    return ((n <= 1) ? 1 : n + recSumTo(n - 1))
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let f = 1
    for (let i = 2; i <= n; ++i) {
        f *= i
    }
    return f
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 1) return true
    if (n < 1) return false
    return (n % 2 === 0) && isBinary(n / 2)
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return ((n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2))
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
