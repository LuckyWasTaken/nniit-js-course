//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n % 1 == 0;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let a = [];
    for (i = 2; i <= 20; i++){
        if (i % 2 == 0){
            a.push(i);
        }
    }
    return a;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let a = 0;
    for (i = 0; i <= n; i++){
        a += i;
    }
    return a;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1){
        return 1;
    }
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let a = 1;
    for ( i = 1; i <= n; i++){
        a *= i; 
    }
    return a;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 0){
        return false;
    }
    return n && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let a = 1;
    let b = 1;
    if (n == 1 || n == 2){
        return 1;
    }
    for (i = 3; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
