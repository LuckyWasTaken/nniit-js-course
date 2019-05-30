//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return((n|0)===n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let i=0;
    let arr = [];
    while ((i===0)||(arr[i-1]<(20)))
    {   
        arr[i] = (2*(i+1));
        i++;
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum =0;
    while (n>0)
    {
        sum+=n;
        n--;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    
    if (n>0)
    {
        
        return n + recSumTo(n-1);
    }
   
        return n;
    
    
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fact = 1;
    let i = 2;
    while (i<=n)
    {
        fact = fact * i;
        i++;
    }
    return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return ((n !== 0) && ((n & (~n + 1)) === n));
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if ((n===1)||(n === 2))
    {
        return 1;
    }
   
    let prevprev =1;
    let prev  = 1;
    let cur = 2;
    let i = 3;
    while (i<n)
    {
        prevprev = prev;
        prev = cur;
        cur = prevprev + prev;
        
        i++;
    }
    return cur;
    
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
