//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str)
{
    var words = str.split(' ');
    var result = "";

    for (var i = 0; i < words.length; i++)
        if (words[i].length > 0)
        {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);

            if (i > 0)
                result += ' ' + words[i];
            else
                result += words[i];
        }

    return result;
};

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n)
{
    if (str.length > n)
        return str.substring(0, n) + "...";
    else
        return str;
};

//Определите, пуст ли объект
function isEmpty(obj)
{
    for (var propertyName in obj)
        if (obj.hasOwnProperty(propertyName))
            return false;

    return true;
};

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj)
{
    for (var propertyName in obj)
        if (obj.hasOwnProperty(propertyName) && typeof (obj[propertyName]) == "number")
            obj[propertyName] *= 2;

    return obj;
};

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr)
{
    function callbackFunction(previousValue, currentValue, currentIndex, array)
    {
        return previousValue + currentValue;
    };

    return arr.reduce(callbackFunction);
};

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str)
{
    for (var i = 0; i < str.length / 2; i++)
        if (str.charAt(i) != str.charAt(str.length - 1 - i))
            return false;

    return true;
};

module.exports =
{
    capitalize,
    truncate,
    isEmpty,
    multiply,
    sumArr,
    isPali
};

