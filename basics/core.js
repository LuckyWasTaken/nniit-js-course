//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const list=[];
    const finishNumber=20;
    for(let startNumber=2; startNumber<=finishNumber; startNumber++){
        if(startNumber%2==0){
            list.push(startNumber);
        } 
    }
    return list;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let result=0;
    for(let count=0; count<=n; count++){
        result=result+count;
    }
    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n == 1){
        return 1;
    }
    return n + recSumTo(n - 1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let result=1;
    if(n==0){
        return 1 //Факториал 0=1
    }
    for(let startNumber=1; startNumber<=n; startNumber++){
        result=result*startNumber;
    }
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n <=0) ? 0 : (n & (n - 1)) == 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n == 1 || n == 2){
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
