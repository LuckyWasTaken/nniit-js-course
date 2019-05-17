//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if (n%1 == 0) return true;
    else return false; 
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var arr = new Array;
    for (i = 1; i < 21; i++) {
        if (i % 2 == 0) arr.push(i);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum =  sum + i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n > 0) {
        return n + recSumTo(n - 1);
    } else {
        return n;
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    var mult = n;
    while (n > 1) {
        mult *= n - 1;
        n--;
    }
    return mult;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    // while (1) {
    //     if (n % 2 == 0) {
    //         n /=2;
    //     } else {
    //         return false
    //     }
    //     if (n = 1) return true;
    // }
    return ((n != 0) && ((n & (~n + 1)) === n));
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    var a = 1, b = 1;
    if (n == 1 || n == 2) return 1;
    for (i = 3; i <= n; i++) {
        temp = b;
        b = a + b
        a = temp;
    }
    return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
