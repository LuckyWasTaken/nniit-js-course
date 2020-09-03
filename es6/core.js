// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let [secondName, firstName, thirdname = ''] = fio.split(' ')
    return firstName + ' ' + secondName
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(numbers) {
    const uniqNumbers = new Set(numbers)
    return Array.from(uniqNumbers)
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salaries) {
    const min = Math.min(...salaries)
    const max = Math.max(...salaries)
    return max / min
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let fb = function(elem, index, array) {
        number = index + 1
        if (number % 15 == 0) {
            return 'FooBar'
        } else if (number % 5 == 0) {
            return 'Bar'
        } else if (number % 3 == 0) {
            return 'Foo' 
        } else {
            return number
        }
    }
    return  Array.from(Array(n)).map(fb)
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary { 
    constructor() {
        this.map = new Map();
    }

    addWord(key, value) {
        if (typeof key  == "string" && typeof value == "string") {
            this.map.set(key, value);
        }
    }

    getWord(key) {
        return this.map.get(key);
    }

    deleteWord(key) {
        this.map.delete(key);
    }

    contain(key) {
        return this.map.has(key)
    }

    size() {
        return this.map.size;
    } 
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
