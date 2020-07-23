//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const array = [];
    for (let i = 2; i <= 20; i++) {
        if (i % 2 == 0) {
          array.push(i);
        }
    }
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum+=i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1){
        return 1;
    }
     
    return recSumTo(n - 1) + n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 1){
        return 1;
    }
     
    return factorial(n - 1) * n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n < 1) ? false : (n & (n-1)) == 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 0){
        return null;
    }

    let a = 0;
    let b = 1;
    let fib = 1;
    for (let i = 2; i<=n; i++){
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
