//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  if (n % 1 === 0) return true;
  return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let evenNumbers = [];
  for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) evenNumbers.push(i);
  }
  return evenNumbers;
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
  if (n === 1) return n;
  return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  if (n === 0 || n === 1) return n;
  let factorialSum = 1;
  for (let i = 1; i <= n; i++) {
    factorialSum *= i;
  }
  return factorialSum;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  if (n.toString(2).replace(/0/g, "") === "1") return true;
  return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n === 0) return n;
  if (n === 1 || n === 2) return 1;
  let x = 1;
  let y = 1;
  for (let i = 2; i < n; i++) {
    y = x + y;
    x = y - x;
  }
  return y;
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
