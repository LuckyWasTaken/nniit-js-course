// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fullName) {
    let [lastName, firstName, midlName] = fullName.split(" ");
    return `${firstName} ${lastName}`;
}


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set();
    arr.forEach(item => {
        set.add(item);
    });
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    var max = arr.reduce(function (max, current) {
        if (current > max) return current;
        return max;
    }, 0);
    var min = arr.reduce(function (min, current) {
        if (current < min) return current;
        return min;
    }, max);
    return max / min;
}


// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    var arr;
    for (i = 1; i <= n; i++) {
        arr[i] = i;
    }
    arr2 = arr.map(function (current) {
        if (current % 3 === 0) return 'Foo';
        if (current % 5 === 0) return 'Bar';
        if (current % 15 === 0) return 'FooBar';
        return current;
    });

}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(arr) {
        this.arr = arr;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
