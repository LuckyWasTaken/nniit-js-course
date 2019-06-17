// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    var pos = 0;
    var name = "";
    var surname = "";
    var foundPos = 0;

    foundPos = str.indexOf(" ", pos);
    surname = str.slice(pos,foundPos);
    pos = foundPos + 1;
    foundPos = str.indexOf(" ", pos);
    if(foundPos < 0) foundPos = str.length;
    name = str.slice(pos,foundPos);

    return (name + " " + surname);
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set();
    let i = 0;
    let arr2 = [];
    for(i = 0; i < arr.length; i++)
        set.add(arr[i]);
    i = 0;
    set.forEach((value, valueAgain, set) => {
        arr2[i] = value;
        i++;
    });
    return arr2;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if(arr.length == 0) return false;
    var max = arr.reduce(function(a, b) {
        return a>b ? a:b
      });
    var min = arr.reduce(function(a, b) {
        return a<b ? a:b
      });
    return max/min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    var arr = [];
    for (var i = 1; i < n; i++){
        arr[i-1] = i;
        if(i % 3 == 0) arr[i-1] = "Foo";
        if(i % 5 == 0) arr[i-1] = "Bar";
        if(i % 15 == 0) arr[i-1] = "FooBar";
    }
    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.dictionary = new Map();
    }

    add(key, value){
        if ((typeof key == "string") && (typeof value == "string")) {
            this.dictionary.set(key, value);
            return true;
        }
        return false;
    }   
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
