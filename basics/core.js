//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var summa = 0;
    for(var i = 1; i <= n; i++){
        summa = summa+i;
        }
        return summa;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
   if (n == 1)
    return 1;
    return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n == 0 || n == 1)
        return 1;
        return n * factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n&(n-1)) == 0 && n!= 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
