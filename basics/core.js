//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
 
    if(!n){
        return;
    }
    else {
        return (n % 1 == 0);
    }
    
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    
    let array = [];
    for (let i = 2; i < 21; i += 2) {
        array.push(i);
    }
    return array;
    
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    
    if(!n){
        return;
    }
    else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    
    if(!n){
        return;
    }
    else {
        if (n == 1) {
            return 1;
        }
        else {
            return n + recSumTo(n-1);
        }
    }
    
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    
    if(!n){
        return;
    }
    else {
        if (n == 0 || n == 1) {
            return 1;
        }
        else {
            return n * factorial(n-1);
        }
    }
    
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    
    if (n == 1) {
        return true;
    }
    else if (n < 1 || n % 2 !== 0) {
        return false;
    }
    else {
        return isBinary(n / 2);
    }
    
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
    
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
