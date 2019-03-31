//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr=[]
    for (let i = 0; i < 10; i++ ) { 
        arr[i] = 2 * (i + 1)}
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let summa = 0;
    for (let i = 1; i <= n; i++) {
summa += i;
    }
    return summa;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) return 1;
  return n + sumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    return ((n != 0) && !(n & (n - 1)));
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n==1 || n==2){
        return 1;
    }

    let a = 1, b = 1, fib = 0 ;
    for(let i = 3; i<=n; i++){
    fib = a + b;
    a = b;
    b = fib;
    }
    return fib;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
