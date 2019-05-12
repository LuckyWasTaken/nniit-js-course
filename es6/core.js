// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(FIO) {
    const [surname,name] = FIO.split(' ');
    return `${name} ${surname}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    const set = new Set(arr);
    const setarr = []; 
    set.forEach((val,val2,set) => {setarr.push(val)});
    return setarr; 
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    return (arr != 0)?(arr.reduce(function(max, curr){
        return (curr > max)?curr:max;
    })/arr.reduce(function(min, curr){
        return (curr < min)?curr:min;
    })):false;
} 

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    const a = [...Array(n)].map((item,i) => {
       if(!((i+1)%15)){
        return 'FooBar';
       }
       if(!((i+1)%3)){
        return 'Foo';
       }
       if(!((i+1)%5)){
        return 'Bar';
       }
       return i+1;
    });
    return a;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(obj){
        this.dict = new Map();
        for (const key in obj) {
            (!((/[^a-z]/i.test(key))
            ||(/[^а-яё]/i.test(obj[key]))))?this.dict.set(key,obj[key]):"";
        }
    }

    add(obj) {
        for (const key in obj) {
            (!((/[^a-z]/i.test(key))||(/[^а-яё]/i.test(obj[key]))))?this.dict.set(key,obj[key]):"";
        }
    }
    getTranslation(str){
            const obj = this.dict;
            if(str){
                return (obj.has(str))?obj.get(str):"Not found";
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
