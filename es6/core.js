// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js
// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let fullFio = String(fio).split(" ");
    let surname = fullFio[0];
    let name = fullFio[1];
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(numArr) {
    numSet = new Set(numArr);
    return Array.from(numSet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salary) {
    if(salary.length===0){
        console.log('no salary entered')
        return false;
    }
    salary.sort((a, b) => a - b);
    return salary[salary.length-1]/salary[0];
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let sequence = function* (n) {
        for (let i = 1; i <= n; i++) {
            if(i % 15 === 0){
                yield "FooBar";
            }
            else if (i % 5 === 0){
                yield "Bar";
            }
            else if (i % 3 === 0){
                yield "Foo"
            } 
            else yield i;
        }
    }
    let numbers = [ ...sequence(n)]
    return numbers;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.dictionary = new Map;
    }
    add(word, translation){
        if(typeof(word)!="string" || typeof(translation)!="string"){
            console.log('incorrect input')
            return false
        }
        this.dictionary.set(word, translation);
    }
    getTranslation(word){
        if(!this.dictionary.has(word)){
            console.log('this word is not found')
            return false;
        }
        return this.dictionary.get(word);
    }
    delete(word){
        if(!this.dictionary.has(word)){
            console.log('this word is not found')
            return false;
        }
        return this.dictionary.delete(word);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
