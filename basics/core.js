//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n^0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let num = 2;
    let numMax = 20;
    let arr = [];
    let i = 0;

    while (num <= numMax){
        if (num%2 == 0){
            arr[i] = num;
            i++;
        }
        num++;
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0, i;
    for (i = 1; i<=n; i++){
        sum +=i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1){
        return 1;
    }else{
        return n+recSumTo(n-1);
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let comp = 1;

    for (let i = 1; i <=n; i++){
        comp *= i;
    }

    return comp;
    }

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    let pow = 0;
    pow = Math.log2(n);
    if ((pow^0) === pow){
        return true;
    } else{
        return false;
    }
    
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1 || n == 2 ){
        return 1;
    }else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
