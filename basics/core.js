//Saratovtsev Artem 18Pi-1 

//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) 
{
    return ~~n===n;   
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
    let numbers=[];
    let threeNumbersFibonacci=0;
    for (let i=0;i<10;i++)
    {
        threeNumbersFibonacci+=2;
        numbers.push(threeNumbersFibonacci);
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

    //console.log(n);
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

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) 
{
    let threeNumbersFibonacci=[0,1,1];
    if (n>2)
    {
        for (let i=0;i<n-2;i++)
        {
            threeNumbersFibonacci[0]=threeNumbersFibonacci[1];
            threeNumbersFibonacci[1]=threeNumbersFibonacci[2];
            threeNumbersFibonacci[2]=threeNumbersFibonacci[0]+threeNumbersFibonacci[1];
        }
        return threeNumbersFibonacci[2];
    }
    else if (n==2)
        return threeNumbersFibonacci[2];
    else if (n==1)
        return threeNumbersFibonacci[1];
    else if (n==0)  
        return threeNumbersFibonacci[0];      
}


module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
