//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}


//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let i = 0;
    let buf = [];
    buf[i] = 2;
    while (buf[i] < 20){
        i++;
        buf[i] = buf[i - 1] + 2;
    }
    return buf;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n == 1){
        return 1;
    } else {
        return n + recSumTo(n - 1)
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let fact = 1;
    for(let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;

}

//Напишите функцию, которая определяет, является ли число бинарным
function isBinary(n) {
   if(n <= 0){
       return false;
   }
   if(n == 1){
    return true;
    }
   while((n%2) == 0) {
       if ((n /= 2) == 1) {
           return true;
       }
   }
           return false;

}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) { // быстрый Фибоначчи без рекурсии, регистрации и СМС;)
    let firstMember = 1, secondMember = 1;
    for(let i = 3; i <= n; i++){
        let tmp = firstMember + secondMember;
        firstMember = secondMember;
        secondMember = tmp;
    }
    return secondMember;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}


console.log(
    isInteger(10)
)

console.log(
    even()
)

console.log(
    sumTo(10)
)

console.log(
    recSumTo(10)
)

console.log(
    factorial(5)
)

console.log(
    isBinary(2048)
)

console.log(
    fibonacci(77)
)
