// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(string) {
    let [lastName, firstName] = string.split(" ");
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    let filter = new Set(array);
    return Array.from(filter);
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
    let result=[];
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
            result.push("FooBar")
        } else if (i % 5 === 0) {
            result.push("Foo")
        } else if (i % 3 === 0) {
            result.push("Bar")
        } else {
            result.push(i);
        }
    }
    return result;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }

    add(word, translate) {
        if (this.checkType(word, translate)){
            if (this.dictionary.has(word)) {
                console.log("This word has already been added to the dictionary!");
                return false;
            }
            this.dictionary.set(word, translate);
        }
        return `The word ${word} (${translate}) has been added to the dictionary!`;
    }

    find(word) {
        if (this.dictionary.has(word)) {
            return this.dictionary.get(word);
        }
        return `Sorry, there is no such word in the dictionary!`;
    }

    delete(word) {
        if (!this.dictionary.has(word)) {
            console.log("Sorry, there is no such word in the dictionary!");
            return false;
        }
        this.dictionary.delete(word);
        return `The word ${word} has been removed from the dictionary!`;
    }

    checkType(word, translate) {
        if (typeof word != "string" || typeof translate != "string") {
            console.log(`Incorrect input`);
            return false;
        }
        return true;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};