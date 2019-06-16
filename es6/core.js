// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let mas=str.split(' ');
    return mas[1]+' '+mas[0];   
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(mas) {
    let masUnique=new Set(mas);
    return [...masUnique];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
var max=arr.reduce(function(previous,current){
    if (previous>current)
        return previous;
    else 
        return current;
},0)
var min=arr.reduce(function(previous,current){
    if (previous<current)
        return previous;
    else 
        return current;
},0)
    return max-min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    var mas=[ ];
    for(let i=1;i<=n;i++)
    {
        if((i%3===0)&&(i%5===0))
        mas.push("fooBar");
        else if (i%3===0)
            mas.push("Foo");
            else if(i%5===0)
                mas.push("Bar");
                else mas.push(i);
    }            
    return mas;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.typeOfHero=new Map();
    }
    addWord(kind,hero){
        if(typeof(kind)==='string' && typeof(hero)==='string' && !this.typeOfHero.has(kind)){ 
            this.typeOfHero.set(kind,hero);}
        else
            console.log("You should add only words with type of string or this type was already added before");    
    }
    deleteWord(kind){
        this.typeOfHero.delete(kind);
    }
    isEmpty(){
        if(this.typeOfHero.size==0) 
            return true;
        else 
            return false;
    }
    number(){
        return this.typeOfHero.size;
    }
    check(str){
        if(typeof(str)!=='string'){
            console.error('Wrong type');
        }
        else{
            return this.typeOfHero.get(str);
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
