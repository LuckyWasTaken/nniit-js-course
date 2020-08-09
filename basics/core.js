//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    trunced=n&Number.MAX_SAFE_INTEGER
    if (trunced==n)
        return true
    else
        return false
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    arr=[]
    for(i=2;i<=20;i+=2)
        arr[(i/2)-1]=i
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    sum=0
    for(i=1;i<=n;i++)
    {
        sum+=i
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n==0 || n==1)
        return n
    else
        return recSumTo(n-1) + n
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    result=1
    for(i=n;i>1;i--)
        result*=i
    return result
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if(n<2)
    {
        if(n==1)
            return true
        else
            return false;
    }
    result=true
    while(n>2)
    {
        if(Number.isInteger(n) && n%2==0)
        {
            n/=2;
        }
        else
        {
            result=false;
            break;
        }
    }
    return result
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    arr=[0,1]
    for(k=2;k<=n;k++)
    {
        arr[k]=arr[k-1]+arr[k-2];
    }
    return arr[n]
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}