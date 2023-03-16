//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return typeof n === "number" && (n | 0) === n;
}

// Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}


// Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    if (typeof n !== "number" || n < 0) {
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (typeof n !== "number" || n < 0) {
        return;
    }

    if (n === 1) {
        return 1;
    }
    return n + recSumTo(n - 1);
}

// Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (typeof n !== "number" || n < 0) {
        return;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (typeof n !== "number") {
        return;
    }
    if (n <= 0) {
        return false;
    }
    
    return (n & (n - 1)) === 0;
}

// Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (typeof n !== "number" || n < 0) {
        return;
    }
    if (n === 0) {
        return a;
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}


module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
