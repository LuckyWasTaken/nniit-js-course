// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    if (!fio) {
        throw new Error("The string is empty!");
    }
    let[surname, name] = fio.split(" ");
    return name + " " + surname;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    if (arr.length == 0) {
        return arr;
    }
    arr = [...new Set(arr)]
    return arr;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salary) {
    if (salary.length == 0) {
        return false;
    }
    minAndMax = salary.reduce(
      (accumulator, currentValue) => {
        return [
            Math.min(currentValue, accumulator[0]),
            Math.max(currentValue, accumulator[1])
        ];
    }, [Number.MAX_VALUE, Number.MIN_VALUE]
    );
    return minAndMax[1]/minAndMax[0];
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    arrayFB = [];
    for (let i = 1; i<=n; i++) {
        if (i%3 != 0 && i%5 != 0) {
            arrayFB.push(i);
        }
        if (i%3 === 0) {
            arrayFB.push("Foo");
        }
        if (i%5 === 0) {
            arrayFB.push("Bar");
        }
        if (i%3 === 0 && i%5 === 0) {
            arrayFB.push("FooBar");
        }  
    }
    return arrayFB;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    
    constructor() {
       this.map = new Map();
    }

    getValue(stringKey) {
        return this.map.get(stringKey);
    }

    addToDictionary(stringKey,stringValue) {
        if (typeof(stringKey) === "string" && typeof(stringValue) === "string") {
            this.map.set(stringKey, stringValue);
        }
        return this.map;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
