// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str)
{
    var [lastName, firstName] = str.split(' ');
    return `${firstName} ${lastName}`;
};

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array)
{
    var set = new Set(array);
    return Array.from(set);
};

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salaries)
{
    function reducer([minSalary, maxSalary], currentSalary)
    {
        minSalary = Math.min(currentSalary, minSalary);
        maxSalary = Math.max(currentSalary, maxSalary);

        return [minSalary, maxSalary];
    };

    [minSalary, maxSalary] = salaries.reduce(reducer, [Infinity, 0]);

    return maxSalary / minSalary;
};

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n)
{
    var array = new Array(n);

    for (var i = 0; i < n; i++)
        if ((i + 1) % 15 == 0)
            array[i] = "FooBar";
        else if ((i + 1) % 3 == 0)
            array[i] = "Foo";
        else if ((i + 1) % 5 == 0)
            array[i] = "Bar";
        else array[i] = i + 1;

    return array;
};

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary
{
    constructor()
    {
        this._map = new Map();
    };

    get count()
    {
        return this._map.size;
    };

    contains(key)
    {
        if (typeof (key) == "string")
        {
            if (this._map.has(key))
                return true;
            else
                return false;
        }
        else
            throw new TypeError("The key was not a string.");
    };
    get(key)
    {
        if (typeof (key) == "string")
            return this._map.get(key);
        else
            throw new TypeError("The key was not a string.");
    };
    add(key, value)
    {
        if (typeof (key) == "string" && typeof (value) == "string")
            this._map.set(key, value);
        else if (typeof (key) == "string")
            throw new TypeError("The value was not a string.");
        else if (typeof (value) == "string")
            throw new TypeError("The key was not a string.");
        else
            throw new TypeError("Neither the key nor the value was a string.");
    };
    remove(key)
    {
        if (typeof (key) == "string")
            return this._map.remove(key);
        else
            throw new TypeError("The key was not a string.");
    };
    clear()
    {
        this._map.clear();
    };
};

module.exports =
{
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
