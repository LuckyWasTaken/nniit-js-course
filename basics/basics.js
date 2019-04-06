//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) 
{
return (num ^ 0) === num;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
    let arr[];
   for (let i = 1; i <= 10; i++) {
    arr.push(i * 2); //добавляет эл-т в конец массива от 1*2 до 10*2
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) 
{
let sum =0;
  for (let i = 1; i <= n; i++) 
  {
    sum += i; //sum = sum + i
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) 
{
    if (n == 1) return 1;
  return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) 
{
    return n ? n * factorial(n - 1) : 1;//Если выполняется условие выводится значение 1, если нет - 2
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
  const result = Math.log2(n);
  return isInteger(result);
 }

 //Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  let a = 1,// начальные значения
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;//находим с, далее переопределяем а и b, и тд.
    a = b;
    b = c;
  }
  return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

