// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(...args) {
    let arr = args[0].split(' ');
    return arr[1] + ' ' + arr[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(...args) {
    let set = new Set([...args[0]]);
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference() {
    let min = arguments[0][0], max=arguments[0][0];
    if (arguments[0] != '')
    {
        arguments[0].reduce(function(min, curr) {
        if (curr > max) return max = curr;
    })
    arguments[0].reduce(function(max, curr) {
        if (curr < min) return min = curr;
    })
}
    return max/min;
}

//ИЛИ:
/*function calculateSalaryDifference() {
    let max = Math.max.apply(null, arguments[0]);
    let min = Math.min.apply(null, arguments[0]);
    return max/min;
}*/


// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(...args) {
    for (let arg of args)
    {
        let num = new Dictionary(arg);
    }
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(num) {
        this.map = new this.map();
        this.map
            .set(num)
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
