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
    const set_from_arr = new Set(arr);
    return [...set_from_arr]; 
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    const result = (arr.reduce((min_max, curr) => {
        min_max[0] = (min_max[0] === undefined || curr < min_max[0])?curr:min_max[0];
        min_max[1] = (min_max[1] === undefined || curr > min_max[1])?curr:min_max[1];
        return min_max},[]));
    return result[1]/result[0];
} 

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    const foo_bar_array = [...Array(n)].map((item,i) => {
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
    return foo_bar_array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(obj){
        this.dict = new Map();
        for (const key in obj) {
            const test_key = (/[^a-z]/i).test(key);
            const test_value = (/[^а-яё]/i).test(obj[key]);

            if(!(test_key || test_value)){
                this.dict.set(key,obj[key]);
            }

        }
    }

    add(obj) {
        for (const key in obj) {
            const test_key = (/[^a-z]/i).test(key);
            const test_value = (/[^а-яё]/i).test(obj[key]);

            if((!test_key || test_value)){
                this.dict.set(key,obj[key]);
            }
            
        }
    }
    
    getTranslation(str){
            const { dict } = this;
            if(str){
                return (dict.has(str))?dict.get(str):null;
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
