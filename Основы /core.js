//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) 
{
    return ~~n===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
    let numbers=[];
    let num=0;
    for (let i=0;i<10;i++)
    {
        num+=2;
        numbers.push(num);
    }
    return numbers;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) 
{
    let sum=0;
    for (let i=1;i<n+1;i++)
    {
        sum+=i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) 
{
    if (n==1)
        return 1;
    return (n+recSumTo(n-1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) 
{
    let fact=1;
    for (let i=1;i<n+1;i++)
        fact=fact*i;
    return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) 
{
    while ((n>1)||(n<-1))
        n=n/2;
    if ((n==1)||(n==-1))
        return true;
    else 
        return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи 0 1 1 2 3 5 8 13 21 34 ...
function fibonacci(n) 
{
    let nums=[0,1];
    if (n==0)
        return nums[0];
    else if (n==1)
        return nums[1];

    for (let i=2;i<n+1;i++)
    {
        nums.push(nums[i-1]+nums[i-2])
    } 
    return nums[n];   
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
