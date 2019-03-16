//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = 2 * (i + 1);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n < 0 || (n ^ 0) !== n)
        return null;
    if (n == 0) {
        return 0;
    } else return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 2 == 1) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n==1){
        return 1;
    }
    let fib2=(a,b,num)=>{
        if (num==n){
            return b;
        }
        return fib2(b,a+b,num+1);
    }
    return fib2(1,1,2)
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

