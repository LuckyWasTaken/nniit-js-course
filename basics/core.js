//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return ( n===(n^0));
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var arr = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    for(var sum=0,i=1;i<=n;i++) sum+=i;
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    var sum = n;
    if(n!=0)
        sum += recSumTo(n-1);
    return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n===0)
        return 1;
    if(n===1)
        return n;
    else
        return n*=factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n===1)return 1;
    while(n!=0){
        if(n===2) return 1;
        n/=2;
    }
    return 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n===1) return 1;
    if(n===2) return 1;
    return fibonacci(n-2)+fibonacci(n-1);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
