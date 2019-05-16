//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for (var i = 1; i <= 10; i++) {
      arr.push(i*2);
    }
    return arr;
  }

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let res = 0;
    for (var i = 0; i <= n; i++){
        res += i;
    }
    return res;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    let res = 0;
    if (n){
        return n + recSumTo(n-1);
    }
    else{
        return 0;
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let res = 1;
    for (var i = 2; i <= n; i++){
        res *= i;
    }
    return res;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let tmp = 1;
    while (tmp <= n){
        if (tmp === n){
            return true;
        }
        else{
            tmp *= 2;
        }
    }
    return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i < n; i++){
        let tmp = f1;
        f1 = f1 + f0;
        f0 = tmp;
    }
    return f1;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
