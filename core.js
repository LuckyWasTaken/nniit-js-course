//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if ( ~~n == n );
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {   
    let BasicCharacter = 2, FinishCharacter = 20;
    let ArrayOfEvenNumbers = [];
    for (let i = 0; i < BasicCharacter/FinishCharacter; i++)
    {
        ArrayOfEvenNumbers [i] = BasicCharacter;
        BasicCharacter+2;
    }
     return console.log (ArrayOfEvenNumbers);
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
    if (n > 0)
    {
        if (n == 1)
        {
            return 1;
        }
        else return n + (recSumTo - 1);

    }
    else return console.log ("Your number doesn't fit conditions. Do not try it again you retard!")
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n > 0 && n < 66 && ~~n == n) // I considered the restriction "66" needed cuz otherwise the factorial's gonna be larger than unsigned long long int.
    {
    if (n == 1)
    {
        return 1;
    }
    else 
    {
        return n * factorial (n - 1);
    }
     } else throw new Error ("You number doesn't fit conditions!");
}


//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 2 || 1) return true;
    else if (n == 0) return false;
    else if (n % 2 == 0)
    {
        isBinary (n / 2);
    }
    else return false;
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
