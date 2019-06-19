// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(name) {
    let firstsplit = name.indexOf(' ');
    let secondsplit = name.indexOf(' ', firstsplit+1);
    if (secondsplit === -1)
        secondsplit = name.length;
    let ln = name.substring(0,firstsplit);
    let fn = name.substring(firstsplit+1,secondsplit);
    return `${fn} ${ln}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const filtered = new Set();
    let returnarray = [];
    array.forEach(function(element){
        if(!filtered.has(element))
            filtered.add(element);
    });
    filtered.forEach(function(element){
        returnarray.push(element);
    });
    return returnarray;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0)
        return false;
    let max = array[0];
    let min = array[0];
    reducermax = (max, current) => (current > max) ? max = current : max;
    reducermin = (min, current) => (current < min) ? min = current : min;
    max = array.reduce(reducermax);
    min = array.reduce(reducermin);
    return max/min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let array = [];
    for (var i = 0; i < n; i++)
    {
        if ((i+1) % 3 === 0)
            array[i] += 'Foo';
        if ((i+1) % 5 === 0)
            array[i] += 'Bar';
        if (!(((i+1) % 3 === 0) || ((i+1) % 5 === 0)))
            array[i] = i+1;
    }
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
