// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let [surname, name] = str.split(" ");
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let filteredArr = new Set(arr);
    return Array.from(filteredArr);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (arr.length === 0){
        return false;
    }
    let [max, min] = arr.reduce(function([max, min], current){
        if (current >= max){
            max = current;
        }
        if (current <= min){
            min = current;
        }
        return [max, min];
    }, [0, infinity]);
    return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let answerArray = [];
    for (let i = 1; i <= n; i++){
        if (i % 15 === 0){
            answerArray.push("FooBar");
        }
        else{
            if (i % 3 === 0){
                answerArray.push("Foo");
            }
            else{
                if (i % 5 ===0){
                    answerArray.push("Bar");
                }
                else{
                    answerArray.push(i);
                }
            }
        }
    }
    return answerArray;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this._dictionary = new Map();
    }
    addWord(key, word){
        if (typeof(word) === 'string' && typeof (key) === 'string'){
            if (this._dictionary.has(key)){
                console.log("This word has been already added");
                return false;
            }
            else{
                this._dictionary.set(key, word);
                return true;
            }
        }
        else{
            console.log("It is not a word!");
            return false;
        }
    }
    deleteWord(key){
        if (this._dictionary.has(key)){
            this._dictionary.delete(key);
            return true;
        }
        else{
            console.log("There is no such word");
            return false;
        }
    }
    findWord(key){
        if (this._dictionary.has(key)){
            return this._dictionary.get(key);
        }
        else{
            console.log("There is no such word");
            return false;
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
