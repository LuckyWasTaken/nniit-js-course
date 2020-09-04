//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let trunced=n&Number.MAX_SAFE_INTEGER
    return trunced===n
}
//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr=[]
    for(let i=2;i<=20;i+=2)
        arr[(i/2)-1]=i
    return arr
}
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0
    for(let i=1;i<=n;i++)
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
    let result=1
    for(let i=n;i>1;i--)
        result*=i
    return result
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while(n%2==0 && isInteger(n))
    {
        n/=2;
    }
    return n===1
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