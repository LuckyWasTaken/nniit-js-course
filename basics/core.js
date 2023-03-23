//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(((n ^ 0) == n && n != '') ? true : false);
}
 
//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [...Array(21).keys()].map(i => i + 2).filter(i => i % 2 == 0)
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
    let sum = 0;
    if (n > 0) {
        sum = n + recSumTo(n - 1)
    }
    return sum
}
 
//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1)
    }
    return 1
}
 
//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while (n > 0 && n % 2 == 0) {
        n /= 2
    }
    if (n == 1) {
        return true
    } else {
        return false
    }
}
 
//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let prev = 0
    let next = 1
 
    for (let i = 0; i < n; i++) {
        let tmp = next
        next += prev
        prev = tmp
 
    }
    return prev
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
