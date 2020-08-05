//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n^0) == n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const arr = [];
    for (let j = 0, i = 1; i<= 20; i++){

        if (i%2 == 0){
            arr[j] = i;
            j++;
        }
        console.log(arr);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    const sum = 0;
    let i = 0;
    while (i <= n){
        n +=i;
        i++;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0 )
        return 0;
    else
        return n + recSumTo(--n);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n<=1)
        return 1;
    else
        return n*factorial ( --n);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if(n===2 || n===1)
        return true;
    else if (n > 2)
        return isBinary (n/2);
    else
        return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
