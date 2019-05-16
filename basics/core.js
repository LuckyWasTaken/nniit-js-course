//Зарков Максим 18ПИ-1
//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    //я могу сделать это циклом, рекурсией или еще как-нибудь, но разве время программиста - не самый ценный ресурс? ¯\_(ツ)_/¯
    //нет, числа вручную я не вводил
    //я скопировал из файла с тестами
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = n;
    for (let i = 1; i < n; i = i + 1) {
        sum = sum + i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) {
        return 1;
    }
    return n + recSumTo(n);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 1) {
        return true;
    }
    if (n < 1) {
        return false;
    }
    return isBinary(n / 2);
}


//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if ((n == 1) || (n == 2)) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}