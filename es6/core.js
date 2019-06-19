// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let [lastName, firstName, trash] = fio.split(' ')
    return firstName + ' ' + lastName;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let uniqueArr = new Set;
    arr.forEach(function(elem){
        uniqueArr.add(elem);
    });
    return Array.from(uniqueArr);

}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (arr[0] !== undefined){
        let min = arr.reduce(function (p,v){
            return (p < v ? p : v);
        });
        let max = arr.reduce(function (p,v){
            return (p > v ? p : v);
        });
        return max/min;
    }
    else return false;

}


// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr =[];
    for (let i = 1; i <= n; i++) {
        let elem = `${(i%3==0)?"Foo":''}${(i%5==0)?"Bar":''}`;
        arr[i-1] = (elem==='')?i:elem;
    }
    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this._dictionary = new Map();
    }
    addNewWord(word, description){
        if((typeof(word) === 'string')&&(typeof(description) === 'string')){
            this._dictionary.set(word,description);
            console.log('added');
        }
        else{
            console.log('not added');
        }
    }
    getDescription(word){
        if (this._dictionary.has(word)){
            return this._dictionary.get(word);
        }
        else return null;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
