//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(((n ^ 0) == n && n != '') ? true : false);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [...Array(10).keys()].map(a => (a+1)*2);
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res += i;
    }
    return res;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) {
        return 1;
    }
    return recSumTo(n - 1) + n; 
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return factorial(n-1) * n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n > 0 && n % 2 === 0) {
        return isBinary(n / 2);
    } else {
        if (n === 1) {
            return true;
        } else {
            return false;
        }
    }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fib1 = 0, fib2 = 1;
    for (let i = 1; i < n; i++) {
        let tmp = fib2;
        fib2 = fib1 + fib2;
        fib1 = tmp;
    }
    return fib2;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
