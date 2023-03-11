//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let evenNums = [];
    for (let num = 2; num <= 20; num += 2){
        evenNums.push(num);
    }
    return evenNums;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i){
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1){
        return 1;
    }
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let f = 1;
    for (let i = 2; i <= n; ++i){
        f *= i;
    }
    return f;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let power = 1;
    while (power < n){
        power *= 2;
    }
    return power == n;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let n0 = 0;
    let n1 = 1;
    for (let i = 0; i < n; ++i){
        let temp = n0;
        n0 = n1;
        n1 += temp;
    }
    return n0;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
