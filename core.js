//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {   
    const basicCharacter = 2, finishCharacter = 20;
    let arrayOfEvenNumbers = [];
    let characterToReturn = basicCharacter;
    for (let i = 0; i < finishCharacter/basicCharacter; i++)
    {
        arrayOfEvenNumbers.push(characterToReturn);
        characterToReturn += 2;
    };
     return arrayOfEvenNumbers;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (; n > 0; n--)
    {
       sum += n;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 0) {
        throw new Error ("Your number doesn't fit conditions. Please try again.");}
        if (n === 1){return 1;}
        return n + recSumTo(n- 1);}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (~~n !== n && n < 0 && n > 171) {
        throw new Error ("JS is a serios programming language but not that much:)");
    }
    if (n === 1)
    {
        return 1;
    }
    else 
    {
        return n * factorial (n - 1);
    }}


//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) { 
   this.n = Math.log2(n);
   return (this.n ^ 0) === this.n;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1)
    return n;
    else return fibonacci (n-1) + fibonacci (n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
