//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for (let i = 2; i <= 20; i+=2)
    {
        arr.push(i);
    }    
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let s = 0;
    while (n > 0)
    {
        s+=n--;
    }
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 0)
    {
        return 0;
    }
    else
    {
        return n + recSumTo(n - 1);
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n > 0) && (n & (n - 1)) == 0; 
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1){
        return n;
    }
    else   
        return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
