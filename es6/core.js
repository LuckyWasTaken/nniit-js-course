// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
<<<<<<< HEAD
function fioToName(user) {
    let [surName, name, ...rest] = user.split(" ");
    return `${name} ${surName}`;
}
=======
function fioToName() {}
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
<<<<<<< HEAD
function filterUnique(arr) {
        let set = new Set(arr);
        return [...set];
}
=======
function filterUnique() {}
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
<<<<<<< HEAD
function calculateSalaryDifference(arr) {
    let min = arr.reduce((min, element) => {
            return (min < element ? min : element)
        }, arr[0]);
        let max = arr.reduce((max, element) => {
            return (max > element ? max : element)
        }, arr[0]);
        return max / min;
}
=======
function calculateSalaryDifference() {}
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
<<<<<<< HEAD
function fooBar(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 == 0){
            arr.push("FooBar");
        } else if(i % 5 == 0) {
            arr.push("Bar");
        } else if(i % 3 == 0) {
            arr.push("Foo");
        } else {
            arr.push(i);
        }
    }
    return arr;
}
=======
function fooBar() {}
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
<<<<<<< HEAD
class Dictionary {
    constructor() {
        this._map = new Map();
    }

     set(key, value) {
        if (this.checkWord(key) && this.checkWord(value)) {
            this._map.set(key, value);
            return true;
        }
        return false;
    }

     get(key) {
        if (this.checkWord(key)) {
            this._map.get(key);
        }
    }

     delete(key) {
        if (this.checkWord(key)) {
            this._map.delete(key);
        }
    }

     checkWord(word) {
        return word && typeof word === "string";
    }
}
=======
class Dictionary {}
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
<<<<<<< HEAD
    calculateSalaryDifference,
    fooBar
=======
    calculateSalaryDifference
>>>>>>> 7f25be0175d66f9258b091dfa32d5c61a7eddfe7
};
