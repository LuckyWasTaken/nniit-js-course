//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if( n | 0 == n && n > 0 )
        return true;
    else
        return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = [];
    for (let i = 2; i <= 20; i += 2) 
        array.push(i);
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var rez = 0;
    for(var i = 1; i <= n; i++){
      rez += i;
    }
    return rez;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) 
        return 1;
    return n + resSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 0)
        return 1;
     else 
         return n * factorial( n - 1 );
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n!= 0) && ((n&(n-1))== 0);    
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n < 2)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
