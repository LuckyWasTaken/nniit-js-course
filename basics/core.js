//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let roundNum = n & n;

    if (roundedNum != n)
        return false;

    return roundNum === n;

}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const arr = new Array();

    let i = 2;
    while (i != 22) {
        arr.push(i);
        i += 2;
    }
    // console.log(arr);

    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let i = 0;
    let sum = 0
    while (i != n + 1) {
        sum += i;
        i++;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0) {
        return n;
    }
    else
        return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let i = 1;
    let mul = 1
    while (i != n + 1) {
        mul *= i;
        i++;
    }
    return mul;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let num = Math.log2(n);
    //console.log(num);
    let check = num & num;

    if (check != num)
        return false;

    return num === n;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 2 || n == 1) {
        return 1;
    }
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}



module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
