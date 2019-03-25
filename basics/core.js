//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
  return (n ^ 0) === n; 
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let arr=[];
  arr[0]=2;
  for(let i=1; i<10;i++){
      arr[i]=(i+1)*2;
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  var sum = 0; 
  for (var i = 1; i <= n; i++) { 
  sum += i; 
  } 
  return sum; 
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  if (n == 1) return 1; 
return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  let f = 1;
  for (let i = 1; i <=n; i++){
      f *= i;
  }
  return f;
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
  let num = Math.log2(n);
  return Number.isInteger(num);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  var a = 1, 
  b = 1; 
  for (var i = 3; i <= n; i++) { 
      var c = a + b; 
      a = b; 
      b = c; 
  } 
  return b;
}

module.exports = { 
  isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
