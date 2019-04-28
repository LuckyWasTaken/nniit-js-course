//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(n^0)===n
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {

    let outputArray = [];

    for (let index = 2; index <= 20; index=index+2) {
        
        outputArray.push(index);
    }
    return outputArray;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let count = 0; count <= n; count++)
    {
        sum = sum + count;
    }
    return(sum);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n)
    {
        return n + recSumTo(n-1);
    }
    else return(n);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n)
    {
        return n*factorial(n-1);
    }
    else return(1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let s2 = 1
    for (s2;s2<n;s2=s2*2);
    if(s2==n) return true;
    if(s2>n) return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n==1) return 1;
    if(n==2) return 1;
    return fibonacci(n-2) + fibonacci(n-1);  
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

