// Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n){
    if(typeof n === 'number'){
        n % 1 === 0 ? console.log("True") : console.log("False")
    }
}

// Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even(){
    let res = []; 

    for (let i = 2; i <= 20; i++){
        i % 2 === 0 ? res.push(i) : console.log("Nope");
    }

    return res;
}

// Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(N){
    var sum = 0

    for (var i = 0; i < N; i++) sum = sum + i;
    return sum;
}

// Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recurSum(N){
    if (N <= 1) return N;
    return N + recurSum(N - 1);
}

// Напишите функцию, считающую факториал заданного числа
function factorial(N){
    if (N == 0) return 1;
    return N * factorial(N - 1);
}

// Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(N){
    return N == 0 || N == 1;
}

// Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(N){
    if (N <= 1) return N;
    return fibonacci(N - 1) + fibonacci(N - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
