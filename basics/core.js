//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return n == (n ^ 0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  if (n == 0) return 0;
  else return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  let factorialN = 1;
  for (let i = 1; i <= n; i++) factorialN = factorialN * i;
  return factorialN;
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
  for (let i = 0; i <= 64; i++) {
    if (n == 1 << i) return true;
  }
  return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
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
