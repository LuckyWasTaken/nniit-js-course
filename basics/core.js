///Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arrInt = [];
    for (let i = 2; i <=20; i += 2){
        arrInt.push(i);
    }
    return arrInt;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 1) return 1;
    return (n + recSumTo(n - 1));
}
//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum =0;
    while (n>0)
    {
        sum+=n;
        n--;
    }
    return sum;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if ((n==1)||(n==2))
        return 1;
    else
    return fibonacci(n-2)+fibonacci(n-1);
}
const fib = n => {
  let prev = 0, next = 1;
  for(let i = 0; i < n; i++){
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	for(var intCurrent = 2; intCurrent <= n; intCurrent *= 2){
		if (intCurrent === n){


			return true;
		}
	}
	return false;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	for (var intResult = 1, i = 1; i <= n; intResult *= i, i++){}
	return intResult;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}