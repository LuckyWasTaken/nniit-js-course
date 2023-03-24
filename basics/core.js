//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
   return (n === +n && n % 1 === 0)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  const numbers = [];
  for (let i = 2; i <= 20; i += 2) {
    numbers.push(i);
  }
  return numbers;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл // Я так понял сумму от единицы до заданного???? Или от заданного до заданного?
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
if (n === 1) {
    return 1;
  }
return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа // Я очень надеюсь что факториал не может быть взят от отрицательного числа
function factorial(n) {
   if (n<0) {
      return undefined;
   }
   
   let factorial = 1
   for (let i = 2; i <= n ; i++) {
      factorial *= i;
   }
   return factorial;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
   if (n % 2 === 0) {
      return True;
   }
   return False;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
// ok seems done. made by grigory from 20 PI-1
