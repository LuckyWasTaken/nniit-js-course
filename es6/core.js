// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [lastName, firstName, secondName] = fio.split(" ");
    return firstName + " " + lastName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    const newSet = new Set(arr);
    const array = Array.from(newSet);
    return array;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arrSalary) {
    if (arrSalary.length === 0) {
        return false;
    }
    const highestSalary = arrSalary.reduce(function (prev, current) {
        if (prev <= current) {
            return current;
        }
        return prev;
    }, 0);

    const lowestSalary = arrSalary.reduce(function (prev, current) {
        if (prev >= current) {
            return current;
        }
        return prev;
    });
    return highestSalary / lowestSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let generator = generateSequence(n);
    const arr = [];
    for (let i of generator) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

function* generateSequence(n) {
    for (let i = 1; i < n; i++) {
        if (i % 15 === 0) {
            yield "FooBar";
        }
        else if (i % 5 === 0) {
            yield "Bar";
        }
        else if (i % 3 === 0) {
            yield "Foo";
        }
        else
            yield i;
    }
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
       const getWord = this.map.get(key);
       return getWord;
    }

    checkWord(key) {
        if ( this.map.has(key) == true) {
            return true;
        }
        return false;
    }

    deleteWord(key) {
        this.map.delete(key);
    }

    sizeofDic() {
        const size = this.map.size;
        return size;
    } 
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
