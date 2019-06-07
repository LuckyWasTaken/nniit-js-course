// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(string) {
    return `${( tmpstr = string.split(' '))[1]} ${tmpstr[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return [...new Set(array)]; 
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    var maxSalary=arr.reduce((max, current) => {return (current>max) ? current : max}, 0);
    var minSalary=arr.reduce((min, current, i) => {return (i===0)?current:(current<=min) ? current : min}, 0);
    return maxSalary/minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(val) {
    var str;
    var array =[];
    for (var i = 0; i < val; i++) {
        str = `${(i%3==0)?"Foo":''}${(i%5==0)?"Bar":''}`;
        array[i] = (str==='')?i:str;
    }
    return array;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
    class Dictionary {
        constructor() {
            this.dict = new Map();
        }
    
        AddWord(word, translation) {
            if (typeof(word) !== 'string' || typeof(translation) !== 'string') {
                return -1;
            }
            this.dict.set(word, translation);
        }
    
        Translation(word) {
            if (typeof(word) !== 'string' || !(this.dict.has(word))) 
            {
                return null;
            }
            return this.dict.get(word);
        }
    }

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
