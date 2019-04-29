//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(n^0===n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return[2, 4, 6, 8, 10, 12 ,14 ,16, 18, 20];
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum;
    for(;n>0;n--)
    {
        sum+=n;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n===0) return n;
    else return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let prod=1;
    while(n)
    {
        prod*=n--;
    }
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    for(var i=0;i<64;i++)
    {
        if(n===Math.pow(2,i))   return true;
    }
    return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n <= 2) return(1);
    return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
