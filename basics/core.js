//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return Number.isInteger(n);
}
  
//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  return Array.from({length: 10}, (_, i) => (i + 1) * 2);
}
  
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
  
//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  return n === 1 ? 1 : n + recSumTo(n - 1);
}
  
//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
  
//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  return Number.isInteger(Math.log2(n));
}
  
//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
