//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    //(n ^ 0) == n && n != ''
    return(((n ^ 0) == n && n != '') ? true : false) 
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = []
    for (let i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let i = 0;
    let sum = 0;
    while (i <= n){
        sum += i;
        ++i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n != 0 && (n && (n & (n - 1)) === 0) ? true : false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n >= 0){
        return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    } else {
        return fibonacci(n + 2) - fibonacci(n + 1);
    }
    //Работает с отрицательными числами тоже
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
