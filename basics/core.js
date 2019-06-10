//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    function even(){
    let arr = [];
    for (let i= 0; i <10; i++){
        arr[i] = 2*(i+1);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    while (n>0){
        sum = sum + n;
        n--;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n===0){
        return n;
    }
    return (n + recSumTo(n-1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fact = 1;
    for (let i=n;i>0;i--){
        fact = fact*i;
    }
    return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let i = 0;
    for(;i<64;) {
        if(n=== Math.pow(2,i)) {
            return true;
        }
        i++;
    }
    return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n < 3) {
        return (1);
    }
    return fibonacci(n-2) + fibonacci(n-1);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
