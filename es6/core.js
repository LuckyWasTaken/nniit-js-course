// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let[lastName,firstName, ...other]=fio.split(' ');
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arrOfNum) {
    let unique=new Set(arrOfNum);
    return [...unique];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arrOfSalary) {
    if(arrOfSalary.length===0){
        return false;
    }
   let min=arrOfSalary.reduce((prevValue,currValue)=>Math.min(prevValue,currValue));
   let max=arrOfSalary.reduce((prevValue,currValue)=>Math.max(prevValue,currValue));
   return max/min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr=[];
    for(let i=1;i<=n;i++){
        if(i%15===0){
            arr.push('FooBar');
        }
        else if(i%3===0){
            arr.push('Foo');
        }
        else if(i%5===0){
            arr.push('Bar');
        }
        else{
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
        this._dict=new Map();
    }
    insert(addKey,addValue){
        if(typeof(addKey)==='string' && typeof(addValue)==='string'){
            if(this._dict.has(addKey)){
                console.log(`Ключ (${addKey}) ранее был довавлен в словарь. Текущее значение (${this._dict.get(addKey)}) было заменено на (${addValue}).`)
            }
            this._dict.set(addKey,addValue);
        }
        else{
            console.error(`Неверный формат ключа (${addKey}, ${addValue}).`);
        }
    }
    getValue(getKey){
        if(typeof(getKey)!=='string'){
            console.error(`Неверный формат ключа (${getKey}).`);
        }
        else{
            return this._dict.get(getKey);
        }
    }
    erase(eraseKey){
        if(typeof(eraseKey)!=='string'){
            console.error(`Неверный формат ключа (${eraseKey}).`);
        }
        else{
            if(this._dict.has(eraseKey)){
                this._dict.delete(eraseKey);
            }
            else {
                console.error(`В словаре нет элемента (${eraseKey}).`)
            }
        }
    }
    find(findKey){
        if(typeof(findKey)!=='string'){
            console.error(`Неверный формат ключа (${findKey}).`);
        }
        else{
            return this._dict.has(findKey);
        }
    }
    empty(){
        return this._dict.size===0;
    }
    size(){
        return this._dict.size;
    }
    
}

module.exports = {
    fioToName,
    filterUnique,
    fooBar,
    Dictionary,
    calculateSalaryDifference
};
