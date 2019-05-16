//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n==(n^0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
	    for(let i=1;i<=n;i=i+1){
            sum+=i;
        }
	    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n==0) return 0;
    return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if(n==0)return 1;
	let ans=1;
	for(let i=1;i<=n;i++)ans*=i;
	return ans;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while(n>1){
        if(n%2==1)return false;
        n/=2;
    }
    return n!=0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fib1=0;
    let fib2=1;
    for(i=1;i<=n;i++){
        let fib3=fib1+fib2;
        fib1=fib2;
        fib2=fib3;
    }
    return fib1;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
