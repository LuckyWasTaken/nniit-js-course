//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
return (n^0)===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    arr[0] = 2;
    for (let i = 1; i < 10; i++){
        arr [i] = arr[i - 1] + 2;
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    let sum = 0;
    if (n > 1){
        sum = recSumTo (n -1);
    }
    return sum + n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let sum = 1;
    for (i = 1; i <= n; i++){
        sum *= i;
    }
    return sum;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return n != 0 && (n & (n - 1)) == 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let arr = [];
    arr [0] = 0;
    arr [1] = 1;
    for (let i = 2; i <= n; i++){
        arr [i] = arr [i-1] + arr [i-2];
    }
    return arr[n];
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
