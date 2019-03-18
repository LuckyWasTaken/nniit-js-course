//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return ((n^0)===n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr=[];
    arr[0]=2;
    for(let i=1; i<10;i++){
        arr[i]=(i+1)*2;
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
    while(n>0){
        sum+=n;
        n--;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    //let sum;
    if(n<=0){
        return null;
    }
    if(n===1){
        return 1;  
    }
    const sum = n + recSumTo(n-1);
    return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n<1){
        return null;
    }
    if(n===1){
        return 1;
    }
    return n*factorial(n-1);    
}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
    let value=1;
    while(value<n){
        value*=2;
    }
    return value===n;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n<=0){
        return null;
    }
    if (n === 1 || n === 2){
        return 1;
    }
	else
		return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
