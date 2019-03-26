//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i * 2);
  }
  return arr;
  // ну или просто можно было задать return arr=[2,4,6...20]
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
  if (n === 0) {
    return 0;
  }
  return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  const result = Math.log2(n);
  return isInteger(result);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  /* Вариант 1:
    if (n===1 || n===2){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
    */
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr[n - 1];
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
