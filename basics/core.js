//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let pobit=n^0;
    return (pobit)==n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let massive=[2,4,6,8,10,12,14,16,18,20];
    return massive;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var counter =0;
    var sum =0;
    while(counter<=n){
        sum+=counter;
        counter ++;
    }
    return sum;
}
//console.log(sumTo (4));
//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n==1) return 1
    else
    return n+recSumTo(n-1);

}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    var r=1;
    if (n==1 || n==0) return 1
    else
    for(var i=2;i<=n;i++){
        r*=i;
    }    
    return r;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n<1 && n!=0 )        
    {
      n = (n>0)? 1/n : 0;
    };
    return n && !(n & (n - 1));    
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n<3) return 1;
    return (fibonacci(n-2)+fibonacci(n-1));
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
