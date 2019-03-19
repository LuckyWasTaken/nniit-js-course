//Напишите функцию, которая проверяет,
//является ли число целым используя побитовые операторы
function isInteger(n) {
  if (n % 1 == 0) return true;
  return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let arr = [];
  arr[0] = 2;
  for (let count = 1; arr[count - 1] < 20; count++){
    arr[count] = arr[count - 1] + 2;
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let summa = 0;
  while (n > 0) {
    summa += n;
    n--;
  }
  return summa;
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
    let exp2 = 2;
    while (exp2 <= n) {
      if (exp2 == n) return true;
      exp2 *= 2;
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
