//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    var nNew = ~~n;
    if (n === nNew)
    return true;
    else return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var array = [];
    var i = 0;
    var num = 0;
    while (num < 20)
    {
        i++;
        num = i * 2;
        array[i-1] = num;
    }
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var i;
    var sum = 0;
    for (i = 0; i <= n; i++)
    {
        sum = sum + i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
if (n === 1)
return 1;
sum = n + recSumTo(n-1);
return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    var factorial = 1;
    var i;
    for (i = 1; i <= n; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
var bin = n.toString(2);
var sum = 0;
parseInt(bin, 10);
while (bin)
{
    sum += bin % 10;
    bin = Math.floor(bin / 10);
}
if (sum ===1)
return true;
else 
return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
if ((n === 1) || (n ===2))
return 1;
var prev1 = 1;
var prev2 = 1;
var curr = prev1 + prev2
var i = 3;
while (i < n)
{
    prev1 = prev2;
    prev2 = curr;
    curr = prev1 + prev2;
    i++;
}
return curr;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
