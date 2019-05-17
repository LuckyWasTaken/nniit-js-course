//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if((n ^ 0) === n){
        return true
    }
    return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    var arr=[];
    var count=0;
    for(var i=1; i<=20; i++){
        if(i%2==0){
            arr[count]=i;
            count++;
        }
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var count=0;
    for(var i=0;i<=n;i++){
        count=count+i;
    }
    return count;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    var count=0;
    if(n!=0){
        count=n+recSumTo(n-1);
    }
    return count;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n==1){
        return 1;
    }
    var count=n*factorial(n-1);
    return count;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    var count=1;
    while(count<=n){
        if (count==n){
            return 1;
        }
        count=count*2;
    }
    return 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 1;
    }
    var count=fibonacci(n-2)+fibonacci(n-1);
    return count;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}