//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (num & 1) === 0;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  var result = [];
  for (var i = 2; i <= 20; i += 2) {
    result.push(i);
  }
  return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + recSumTo(n - 1);
  }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  } else {
    return isBinary(n / 2);
  }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
