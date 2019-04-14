// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(string) {
    if(!string){
        alert("You didn't enter any data!");
        return undefined;
    }
    if (typeof string !== "string"){
        alert("You enter wrong data!");
        return undefined;
    }
    let[surName, firstName, ...rest] = string.split(" ");
    return `${firstName} ${surName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(numericArray) {
    if(Array.isArray(numericArray) == false){
        alert("Your data is incorrect!");
        return undefined;
    }else if(numericArray.length === 0){
        return [];
    }
    let set = new Set();
    numericArray.forEach(function(item, i, numericArray){
        set.add(item);
    });
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(sallaryArray) {
    if (!!sallaryArray.isArray) {
	    alert("Data error!");
	    return false;
	}
    let sallary = {
        max: sallaryArray[0],
        min: sallaryArray[0]
    }
    sallaryArray.reduce(function(previousValue, currentValue){
        if (currentValue < previousValue) {
            sallary.min = currentValue;
            return currentValue;
        } else if(currentValue > previousValue){
            sallary.max = currentValue;
            return currentValue;
        }
            return previousValue;
    }, sallaryArray[0]);
    return sallary.min == 0 ? sallary.max : sallary.max / sallary.min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    if(n <= 0 || isNaN(n) == true){
        return false;
    }
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            arr.push("FooBar");
        } else if(i % 5 === 0) {
            arr.push("Bar");
        } else if(i % 3 === 0) {
            arr.push("Foo");
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
    constructor(){
        this._map = new Map();
    }
    _check (word){
        if(!word || typeof(word) !== 'string'){
            return false;
        }
        return true;
    }
    set (word, meaning){
        if(this._check(word) === false || this._check(meaning) === false){
        console.log("You enter wrong data!");
        return -1;
        }
        this._map.set(word, meaning);
        }

    getWord (word){
        if(this._check(word) === false){
            console.log("You enter wrong data!");
            return -1;
        }
        if(this._map.has(word)){
            return this._map.get(word);
        } 
        console.log("Word isn't founded!");
        return -2;
    }
    
    delete(word) {
        if(this._check(word) === false){
            console.log("You enter wrong data!");
            return -1;
        }
        this._map.has(word) ? this._map.delete(word) : console.log("Word isn't founded!");
    };
    change(word, meaning){
        if(this._check(word) === false || this._check(meaning) === false){
            console.log("You enter wrong data!");
            return -1;
        }
        this._map.has(word) ? this._map.set(word, meaning) : console.log("Word isn't founded!");
    }
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
