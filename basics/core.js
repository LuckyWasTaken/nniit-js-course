//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if(n == ~~n)
    return true;
    else return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [], n=0;
    for(let i=2; i<21; i++)
        if ((i%2)==0) arr[n++] = i;
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let i=0, sum=0;
    while (i!=n)
    {

        sum = sum + i;
        i++;
    }
    return sum+n;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n)
    {
    return n + recSumTo(n-1);
    }
    else return n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n!=1)
        return n * factorial(n-1);
    else return n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if ((n % 2 == 0) && (n))
        return isBinary(n/2);
    if (n == 1) return true;
    else return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let arr = [1,1], i;
    if ((n==1)||(n==2)) return 1;
    for(i=2; i<=n; i++)
    {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[i-2];
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
