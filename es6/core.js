// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fullName) {
let [surname,name]=fullName.split(' ');
return name +' '+ surname;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    const set = new Set(arr);
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(zarpl) {
    return Math.max(...zarpl)/Math.min(...zarpl);
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = []
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
          arr.push("FooBar");
        } 
        else if (i % 5 === 0) {
          arr.push("Bar");
        } 
        else if (i % 3 === 0) {
          arr.push("Foo");
        } 
        else {
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
        this.slovar = new Map();
    }
     add(word, transl) {
        if (typeof word !== 'string' || typeof transl !== 'string') return null;
        this.slovar.set(word, transl);
    }
     getTranslate(word) {
        if (typeof word !== 'string') return null;
        return this.slovar.get(word);
    }
 }

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
