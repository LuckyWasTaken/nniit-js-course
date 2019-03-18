 //Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let checker = Number.isInteger(n); 
    return checker; 
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for(let i = 2, j =0; i<=20; i++){
        if (i%2===0){
            arr[j++] = i;
        }
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n===0){
        return 0;
    }else{
        return n +recSumTo(n-1);
    }
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
    let checker = Number.isBinary(n); 
    return checker; 
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n === 1 || n === 2 ){
        return 1;
    }else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
