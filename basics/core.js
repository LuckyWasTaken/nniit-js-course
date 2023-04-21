//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n === (n ^ 0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let resultArray = [];

    for (let i = 2; i <= 20; i += 2)
    {
        resultArray.push(i);
    }
    
    return resultArray;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    
    for (let i = 0; i <= n; i++)
    {
        sum += i;
    }

    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n != 0)
    {
        n += recSumTo(n-1);
    }

    return n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let factorial = 1;

    for (let i = n; i > 1; i--)
    {
        factorial *= i;
    }

    return factorial;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {

    return n && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fibonacciNumberOne = 0;
    let fibonacciNumberTwo = 1;
    let temp = 0;

    for (let i = 0; i < n; i++)
    {
        temp = fibonacciNumberOne;
        fibonacciNumberOne = fibonacciNumberTwo;
        fibonacciNumberTwo += temp;
    }

    return fibonacciNumberOne;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
