//Напишите функцию, которая проверяет,
//является ли число целым используя побитовые операторы
function isInteger(n) {
  return n == n << 32;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  const arr = [];
  arr[0] = 2;
  for (let i = 2; arr[i - 2] < 20; i++) {
    arr.push(i * 2);
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n--;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  if (n > 1) {
    return n + recSumTo(n - 1);
  }
  return n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  let factorial = 1;
  while (n > 0) {
    factorial *= n;
    n--;
  }
  return factorial;
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
  if (n == 1) return true;
  if (n % 2 == 0) {
    for (let exp2 = 2; exp2 <= n; exp2 *= 2) {
      if (exp2 == n) return true;
    }
  }
  return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  let F1 = 1,
    F2 = 1;
  if (n <= 2) return F2;
  for (let FN = 0; n >= 3; n--) {
    FN = F1 + F2;
    F1 = F2;
    F2 = FN;
  }
  return F2;
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
