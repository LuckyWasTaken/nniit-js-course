//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for ( let i = 0; i < 10; i++) {
        arr.push((i*2)+2);  
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let summ = 0;
    for ( let i = 0; i < n+1; i++) {
        summ  += i;  
    }  
    return summ;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n>0)
    {
       return n + recSumTo(n-1);  
    }
    else
    {   
        return n;
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let ff = 1;
    for ( let i = 1; i < n+1; i++) {
        ff  *= i;  
    }  
    return ff;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while(((n%2) == 0) & (n >2))
    {
        n = n/2;
    }
    if ((n ==2)|| (n == 1))
    {
        return true;
    } 
    else
    {
         return false;
    }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let count = 1;
    let first = 1;
    let second = 1;
    for ( let i = 2 ; i < n; i++) {
        count  = first +  second; 
        first = second;
        second = count; 
    }  
    return count;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
