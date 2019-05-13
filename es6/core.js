// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName() {}
function fioToName (str) {
        let arr = str.split(' ');
        return `${arr[1]} ${arr[0]}`;
    }


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique() {}
function filterUnique(arr) {
    let mySet = new Set(arr);
    return Array.from(mySet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference() {}
function calculateSalaryDifference(arr) {
    if(arr.length === 0) {
        return false;
    }
    function minReducer (min, currValue) {
        if (currValue < min) {
            return currValue;
        }
        return min;
    }
    function maxReducer (max, currValue) {
        if (currValue > max) {
            return currValue;
        }
        return max;
    }
    let minPay = arr.reduce(minReducer);
    let maxPay = arr.reduce(maxReducer);
    
    return maxPay/minPay;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar() {}
function fooBar(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i+1;
        if(arr[i]%3 === 0) {
            arr[i] = "Foo";
        }
        if(arr[i]%5 === 0) {
            arr[i] = "Bar";
        }
        if(arr[i]%15 === 0) {
            arr[i] = "FooBar";
        }
    }
    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
//class Dictionary {}
class Dictionary {
    constructor () {
        let dict = new Map ();
    }
    setWord (key, sign) {
        if(typeof key === 'string' && typeof sign === 'string') {
            dict.set (key, sign);
        }
    }
    getSign (key) {
        if (dict.has(key)) {
            console.log(`${key} means: ${dict.get(key)}`)
        }
    }
    deleteWord (key) {
        if (dict.has(key)) {
            dict.delete(key);
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
