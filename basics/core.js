//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return (n | 0) == n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let arr = [];
  for (let step = 2; step <= 20; step += 2) {
    arr.push(step);
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  for (let step = 1; step <= n; step++) {
    sum += step;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  return n > 0 ? n + recSumTo(n - 1) : 0;
}

//Напишите функцию, считающую факториал заданного числа
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function factorial(n) {
    return n != 0 ? n * factorial(n - 1) : 1;
  }

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (Number.isInteger(n)) {
      let sum = 0;
      for (let index = 0; index < n; n = n >> 1) {
        sum += n & 1;
      }
      return sum == 1 ? true : false;
    } else return false;
  }

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1) {
      return 1;
    }
    let arg_1 = 0;
    let arg_2 = 1;
    let arg_3 = 0;
    for (let index = 2; index <= n; index++) {
      arg_3 = arg_1 + arg_2;
      arg_1 = arg_2;
      arg_2 = arg_3;
    }
    return arg_3;
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
