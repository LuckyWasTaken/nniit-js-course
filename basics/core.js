//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  const number = ~~n;
  return number === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  const array = [];
  for (let i = 2; i < 21; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  return n === 1 ? n : recSumTo(n - 1) + n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  return n === 0 || n === 1 ? n : factorial(n - 1) * n;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  if (n <= 0) {
    return false;
  }
  while (n > 2) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      return false;
    }
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
  fibonacci,
};
