//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arrOfNumber = [];
    let i = 0;
    let j = 0;
    while( i <= 20){
        if(i % 2 == 0 && i != 0){
            arrOfNumber[j] = i;
            j++;
        }
        i++;
    }
    return arrOfNumber;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n == 1){
        return 1;
    }
    else{
        return n + recSumTo(n-1);
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n <= 1){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    
    return Math.pow(2, ((Math.log(n) / Math.log(2)) ^ 0)) === n; 
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
   if(n == 1 || n == 2){
        return 1;
   }
   else {
       return fibonacci(n-1) + fibonacci(n-2);
   }  
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
