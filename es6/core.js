// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str = '') {
    const[surname, name] = str.split(' ');
    return `${name} ${surname}`;
  }
// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const filterArray = new Set(array);
    return Array.from(filterArray);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salary) {
    return Math.max(...salary)/Math.min(...salary);
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let res=[];
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
            res.push("FooBar")
        } else if (i % 5 === 0) {
            res.push("Foo")
        } else if (i % 3 === 0) {
            res.push("Bar")
        } else {
            res.push(i);
        }
    }
    return res;
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

    getTransplate(word) {
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
