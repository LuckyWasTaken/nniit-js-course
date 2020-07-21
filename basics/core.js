//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const result = number.filter(number => number % 2 == 0);
    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let summa = 0;
    for(let i = 1; i <= n; i++) {
        summa += i;
    }
    return summa;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n == 1) return 1;
    return recSumTo(n - 1) + n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n < 0) return -1;
    else if(n == 0) return 1;
    else {
        return (factorial(n - 1) * n);
    }
    let resuld = factorial(n);
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n <= 0) ? 0 : (n & (n - 1)) == 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let x = 1, y = 1;
    for(let i = 3; i <= n; i++) {
        let z = x + y;
        x = y;
        y = z;
    }
    return y;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
