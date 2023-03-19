//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return typeof n === 'number' && (n % 1) === 0;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let array = [];
  for (let i = 2; i <= 20; i += 2) {
    array.push(i);
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
  if (n === 1) return 1;
  return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  let res = 1;
  while (n) {
    res *= n--;
  }
  return res;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  return n && (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
