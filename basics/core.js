//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (~~n) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sumOfNumberToN = null
    for (let move = 1; n >= move; move++) 
        sumOfNumberToN += move
    return sumOfNumberToN
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    return (n!=0) ? recSumTo (n - 1) + n : 0
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return (n != 1 && n < 0) ? n * factorial(n-1) : n
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n!==0 && !(n&(n-1))
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
