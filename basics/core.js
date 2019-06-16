//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if (n == (n^0)) return true;
    else return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let listEven = [];
    for (let i = 2; i <= 20; i += 2)
    {
        listEven.push(i);
    }
    return listEven;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let s = 0;
    for (let i = 1; i <= n; i++)
    {
        s += i;
    }
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    return (n > 1) ? n + recSumTo(n - 1) : n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n % 2 == 1 && n != 1 || n == 0) ? false : (n == 2 || n == 1) ? true : isBinary(n / 2);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1 || n == 2) return 1;
    let current = 1, last = 1;
    for (let i = 3; i <= n; i++)
    {
        current += last;
        last = current - last;
    }
    return current;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
