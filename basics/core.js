//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n)
{
    return n == (n ^ 0);
};

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even()
{
    var array = [];
    var lastIndex = 0;
    for (var i = 2; i <= 20; i += 2)
        array[lastIndex++] = i;

    return array;
};

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n)
{
    var result = 0;
    for (var i = 1; i <= n; i++)
        result += i;

    return result;
};

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n)
{
    if (n > 1)
        return n + recSumTo(n - 1);
    else
        return 1;
};

//Напишите функцию, считающую факториал заданного числа
function factorial(n)
{
    var result = 1;
    for (var i = 1; i <= n; i++)
        result *= i;

    return result;
};

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n)
{
    var i = n;
    while (i > 1)
        if (i % 2 == 0)
            i /= 2;
        else
            return false;

    return true;
};

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
    {
        var firstResult = 0, secondResult = 1;
        for (var i = 2; i < n; i++)
        {
            var result = firstResult + secondResult;

            firstResult = secondResult;
            secondResult = result;
        }

        return firstResult + secondResult;
    }
};

module.exports =
{
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
