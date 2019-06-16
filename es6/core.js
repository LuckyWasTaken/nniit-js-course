// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(FIO) {
    let result = FIO.split(' ').reverse();
    if (result.length == 3) result.splice(0, 1);
    return result.join(' ');
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    const set = new Set(arr);
    let arrResult = [];
    set.forEach((value, valueAgain, set) => {
        arrResult.push(value);
    });
    return arrResult;    
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (arr.length == 0) return false;
    if (arr.length == 1) return 1;
    let max = arr[0], min = arr[0];
    let result = arr.reduce((accum, currentValue) => {
        if (currentValue != 0) {
            if (currentValue<min) min = currentValue;
            if (currentValue>max) max = currentValue;
            accum = max / min;
        }
        return accum;
    }, 1);
    return result;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr=[];
    for (let i = 1; i<=n; i++){
        let temp = (i%3 == 0 || i%5 == 0) ? `${(i % 3 == 0) ? 'Foo' : ''}${(i % 5 == 0) ? 'Bar' : ''}` : i;
        arr.push(temp);
    }
    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.diction = new Map();
    }

    add (key, value){
        if (!isNaN(key) || !isNaN(value)) return false;
        this.diction.set(key, value);
        return true;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
