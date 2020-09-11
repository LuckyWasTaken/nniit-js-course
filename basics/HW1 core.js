//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    const number = ~~n;
    return number === n;
  }

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    arr = []
    for(let n=2, i=2; i<=20; i++){
        if(i%2===0){
            arr[n]=i;
            n++;
        }
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
    for(let i=1;i<=n;i++)
        sum+=i;
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n===0)
        return 0;
    return n+recSumTo(--n)
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n<=1)
        return 1;
    return n*factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if(n===2 || n===1)
        return true;
    else if (n>2)
        return isBinary(n/2);
    return false
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n==1 || n==2)
        return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}