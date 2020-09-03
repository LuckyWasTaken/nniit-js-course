// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let [lastName, firstName] = str.split(' ');
    return `${firstName} ${lastName}`;
}


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let mySet = new Set(arr);
    return Array.from(mySet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length > 0) {
        let minWages = array.reduce((min, mid) => {
            return (mid < min ? mid : min);
        }, array[0]);

        let maxWages = array.reduce((max, mid) => {
            return (mid > max ? mid : max);
        }, array[0]);

        return maxWages / minWages;
    }
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar() {
    const array = []
    for (let i = 1; i < n; i++) {
        if (i % 15 == 0) {
            array.push('foobar');
        } else if (!(i % 3)) {
            array.push('foo');
        } else if (!(i % 5)) {
            array.push('bar');
        } else {
            array.push(i);
        }
    }
    return array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor() {
        this._store = new Map();
    }

    add(word, translate) {
        if (typeof word !== 'string' || typeof translate !== 'string') return;
        this._store.set(word, translate);
    }

    getTranslate(word) {
        if (typeof word !== 'string') return null;
        return this._store.get(word);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
