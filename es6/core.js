// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    let spl = str.split(" ");
    let result = spl[1]+" "+spl[0];
    return result;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    return [...new Set(arr)]
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let result = [];
    for(let i=1; i<n; i++){
        if(i%15===0){
            result.push('Foobar');
        } else if(i%5===0){
            result.push('Bar');
        } else if(i%3===0){
            result.push('Foo')
        } else{
            result.push(i)
        }
    }
    return result;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.my_map = new Map();
    }
    add_key_and_value(key, value){
        this.key=key;
        this.value=value;
        if(typeof this.key === 'string' && typeof this.value === 'string'){
            return this.my_map.set(this.key, this.value)
        }
    }
    get_size(){
        return this.my_map.size;
    }
    clear_Dict(){
        return this.my_map.clear();
    }
    has_key(key){
        this.key = key;
        return this.my_map.has(this.key);
    }
    delete_value(key){
        this.key = key;
        return this.my_map.delete(this.key);
    }
    get_value(key){
        this.key = key;
        return this.my_map.get(this.key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
