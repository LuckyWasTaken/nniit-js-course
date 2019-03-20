//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  var array = [];
  for (var i = 0; i <= 9; i++) {
    array[i] = (i + 1) * 2;
  }
  return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию

function recSumTo(n) {
  var sum;
  sum = 0;
  if (n < 0) {
    return 0;
  }
  for (var i = 0; i <= n; i++) {
    sum += i;
    recSumTo;
  }
  return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  fac = 1;
  for (var i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
  while (n != 1) {
    if (n % 2 == 1) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = {
  isInteger,
  even,
  sumTo,
  recSumTo,
  factorial,
  isBinary,
  fibonacci
};
