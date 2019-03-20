//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n^0)===n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr=[];
    for (let i=2; i<=20; i++) {
        arr.push(i);
        i++;
    } 
    return arr;
}


//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
    for (let i=0; i<=n; i++){
        sum+=i;
    }
    return sum; 
}


//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n<1) {
        return null;
    }
    if (n===1) {
        return 1;
    }
    return n + sumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n<1) {
        return null;
    }
    if (n===1) {
        return 1;
    }
    return n * factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    while (n>1) {
        if(n%2===0){
            n=n/2;
        }
        else return false;
    }
    if (n===0){
        return false;
    }
      return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } 
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
