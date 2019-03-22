//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) 
{
    return (n^0)===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
    let mas=[];
    for(i=2;i<=20;i++)
    {
        if (i%2===0)
        {
            mas.push(i);
        }
    }
    return mas;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) 
{
    let sum=0;
    for (let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) 
{
    if (n===0)
    {
        return 0;
    }
    return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) 
{
    if (n===0)
    {
    return 1;
    }
    return n*factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) 
{
    numb=Math.log2(n);
    return ((numb^0)===numb);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) 
{
    if (n==1||n==2)
    {
        return 1;
    }
    return fibonacci(n-2)+fibonacci(n-1);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
