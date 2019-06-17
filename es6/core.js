// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(FIO) {
   if (typeof FIO !== "string" ){
     return null;
   }
   let [surname, name] = FIO.split(" ");
   return (name + " " + surname);}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
   let set = new Set(array);
   return [...set];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if(array.length > 0) {
        let minSalary = array.reduce((min, current) => {
            return (current < min ? current : min);
        }, array[0]);
        let maxSalary = array.reduce((max, current) => {
            return (current > max ? current : max);
        }, array[0]);
        return maxSalary / minSalary;
    }
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let myArray = [];
    for (let i = 1; i < n+1; i++) {
        if (i % 15 == 0) {
            myArray.push("FooBar");
        } else if (i % 5 == 0) {
            myArray.push("Bar");
        } else if (i % 3 == 0) {
            myArray.push("Foo");
        } else {
            myArray.push(i);
        }
    }
    return myArray;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this._map=new Map();
    }
    addWord(word, meaning) {
        this._map.set(word,meaning);
    }
    getWord(word) {
        return this._map.get(word);
    }
    changeMeaning(word, meaning) {
        if (this._map.get(word)) {
            this.addWord(word, meaning);
            return true;
        }
        return false;
    }
    deleteWord(word) {
        return this._map.delete(word);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
