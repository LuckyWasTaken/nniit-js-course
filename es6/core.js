// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let arr = fio.split(" ");
    return `${arr[1]} ${arr[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set(arr);
    return [...set];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    let minSalary = arr.reduce((min, element) => {
        return (min < element ? min : element)
    }, arr[0]);
    let maxSalary = arr.reduce((max, element) => {
        return (max > element ? max : element)
    }, arr[0]);
    return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
//Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
//чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = [];
    for (i = 1; i < n; i++) {
        if (i % 15 == 0) {
            arr.push("FooBar")
        } else if (i % 5 == 0) {
            arr.push("Foo")
        } else if (i % 3 == 0) {
            arr.push("Bar")
        } else {
            arr.push(i);
        }

    }
    return arr;

}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor() {
        this._map = new Map();
    }

    set(key, value) {
        if (this.checkWord(key) && this.checkWord(value)) {
            this._map.set(key, value);
            return true;
        }
        return false;
    }

    get(key) {
        if (this.checkWord(key)) {
            this._map.get(key);
        }
    }

    delete(key) {
        if (this.checkWord(key)) {
            this._map.delete(key);
        }
    }

    checkWord(word) {
        return word && typeof word === "string";
    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
