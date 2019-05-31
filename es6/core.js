// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio = String.prototype) {
    const [surname, name] = fio.split(' ');
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array = Array.prototype) {
    const set = new Set();
    array.forEach((number) => set.add(number));
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array = Array.prototype) {
    if (array.length === 0) return false;

    const lastIdx = array.length - 1;
    const { 0: min, [lastIdx]: max } = array.sort((a, b) => a - b);

    return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(length = Number.prototype) {
    return Array.from({length}).map((_, idx) => {
            const res = idx + 1;

            if (res % 15 === 0) return 'FooBar';
            if (res % 5 === 0) return 'Bar';
            if (res % 3 === 0) return 'Foo';

            return res;
        });
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

const dic = new Dictionary();

dic.add('hello', 'привет');
dic.add('world', 'мир');

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
