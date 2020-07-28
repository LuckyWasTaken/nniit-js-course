//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n == n >> 0;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const arr = [];
    let i = 0;
    for (let num = 2; num <= 20; num++){
        if ((num % 2) == 0 ){
            arr[i++] = num;
        }
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let num = 0;
    let sum = 0;
    while (num <= n){
        sum += num++;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1){
        return n;
    }
    return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let num = 1;
    let fact = 1;
    while (num <= n){
        fact *= num++;
    }
    return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 0){
        return false;
    }
    if (n == 1){
        return true;
    }
    let num = n;
    while (num / 2 > 1){
        if (num % 2 != 0){
            return false;
        }
        num /= 2;
    }
    return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
