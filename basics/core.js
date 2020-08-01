//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return (n >> 1)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	let arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	let isEven = arr.filter(function(x){
		return ((x%2)==0)
	})
	return isEven;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	let sum = 0;
	for(let i=0; i<=n;i++){
		sum+=i;
	}
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if(n <= 1)return n;
	return n + recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fact = 1;
    for(let i = 2; i<=n;i++){
        fact*=i;
    }
    return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
 return ((n!=0)&&(n&(n-1))==0)
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	if(n==0)return 0;
	if(n==1 || n==2)return 1;
	 return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
