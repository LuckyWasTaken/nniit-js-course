//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return(n ^ 0) === n;
}
 
//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = new Array();
    let i = 2;
    while (i!=22){
        arr.push(i);
        i+=2
    }
    return arr;
}
 
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
    for (let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}
 
//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n==1) return 1;
    return n + recSumTo(n-1);
}
 
//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let num = 1;
    let fact = 1;
    while (num <= n){
        fact *= num++;
    }
    return fact;
}
 
//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 0){
        return false;
    }
    if (n == 1){
        return true;
    }
    let num = n;
    while (num / 2 > 1){
        if (num % 2 != 0){
            return false;
        }
        num /= 2;
    }
    return true;
} 
 
//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
