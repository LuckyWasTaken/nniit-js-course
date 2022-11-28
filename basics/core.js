//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (~~n === n); //Сравниваем целую часть с исходным числом.
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = [];
    for (let i = 2; i < 21; i+=2) {
        array.push(i);
    }
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i < (n + 1); i++) {
        sum += i;
    }
    return(sum);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) { return 1 }     
    return (n + recSumTo(n-1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let factorial = 1;
    for (let i = 2; i < (n + 1); i++) {
        factorial *= i;
    }
    return factorial;
}
// Нет рекурсии!

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n && !(n & (n - 1))); // 4 = 100, 3 = 11 => 4 & 3 = 0 => !0 = 1
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let valueFibFirst = 1;
    let valueFibSecond = 1;
    for (let i = 3; i < (n+1); i++) {
      let valueFibN = valueFibFirst + valueFibSecond;
      valueFibFirst = valueFibSecond;
      valueFibSecond = valueFibN;
  }
  return valueFibSecond;
}
// Нет рекурсии!

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
