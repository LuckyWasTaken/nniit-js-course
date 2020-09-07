// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    [name, surname] = fio.split(' ')
    return `${surname} ${name}`
}
console.log(fioToName("PP TT"))
// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set(arr)
    return Array.from(set)
}
// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (!arr)
        return false;
    if (arr.length == 0)
        return false;
    let min = arr[0]
    let max = arr[0]
    const reducer = (accumulator, val) => {
        if (val < min)
            min = val;
        else {
            if (max < val)
                max = val;
        }
    }
    arr.reduce(reducer)
    return max / min
}
// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = new Array();
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            arr.push("FooBar");
            continue;
        }
        if (i % 3 == 0) {
            arr.push("Foo");
            continue;
        }
        if (i % 5 == 0) {
            arr.push("Bar");
            continue;
        }
        arr.push(i);
    }
    return arr;
}
// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
function isStr(val) {
    return typeof (val) === "string";
}
class Dictionary {
    constructor() {
        this.map = new Map();
    }
    set(key, val) {
        if (isStr(key) && isStr(val)) {
            this.map.set(key, val);
        }
    }
    delete(key) {
        if (isStr(key)) {
            this.map.delete(key);
        }
    }
    getVal(key) {
        if (isStr(key)) {
            return this.map.get(key);
        }
    }
    has() {
        if (isStr(key)) {
            return this.map.has(key);
        }
    }


}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
