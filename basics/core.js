//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let y;
    y=n&n;
    if (y==n)
        return true;
    else 
        return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let mas=[];
    let i=0;
    while (i<20)
    {
        i+=2;
        mas.push(i);
    }
    return mas;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let s=0;
    for (let i=1; i<=n;i++)
        s+=i;
    return s;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    
    if (n!=0)
        return n+=recSumTo(n-1);
    else
        return 0;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n!=1)
        return n*=factorial(n-1);
    else
        return 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if ((n>0)&&(n<1)&&(((1/n)&((1/n)-1))==0))
        return true;
    else 
    if ((n>0)&&((n&(n-1))==0))
        return true;
    else
        return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if ((n==1)||(n==2))
        return 1;
    else
    return fibonacci(n-2)+fibonacci(n-1);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
