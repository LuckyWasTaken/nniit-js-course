//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (~~n)===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let num=[];
    for(let n=2;n<21;n++){
        if(n%2==0)
        num.push(n);
    }
    return num;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let summa=0;
    
    for (let i = 0; i <= n; i++ ) {
        summa += i;
    }
    return summa;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1)
      return 1;
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
     return (n != 1) ? n * factorial(n - 1) : 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let num = 1;
    while( num < n ) {
      num=num*2;
      }
    if( n === num ) {
        alert("число " + n + " является 2, возведенной в степень");
      } else {
        alert("число " + n + " не является 2, возведенной в степень");
      }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
     let i = 1, j = 1, k=0;
    for (let m = 3; m <= n; m++) {
      let k = i + j;
      i = j;
      j = k;
    }
    return k;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

console.log(isInteger(3.6));

console.log(even());

console.log(sumTo(5));

console.log(recSumTo(5));

console.log(factorial(4));

console.log(isBinary(1024));

console.log(isBinary(1000));

console.log(fibonacci(6));
