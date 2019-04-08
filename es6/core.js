// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let [...data] = fio.split(' ');
    return `${data[1]} ${data[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let ans = new Set();
    arr.forEach(item => {
        ans.add(item);
    });
    return [...ans];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    let minSalary = arr.reduce((min, current) => {
        return (current < min ? current : min);
    }, arr[0]);
    let maxSalary = arr.reduce((max, current) => {
        return (current > max ? current : max);
    }, arr[0]);

    return maxSalary / minSalary || false;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(arr) {
    ans = [];
    arr.forEach((item, i) => {
        ans[i] = item % 15 == 0 ? "FooBar" : item % 3 == 0 ? "Foo" : item % 5 == 0 ? "Bar" : "";
    });
    return ans;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor(){
        this._map=new Map();
    }

    setValue(a, b) {
        this._map.set(a,b);
    }

    getValue(a) {
        return this._map.get(a);
    }

    change(a, b) {
        if (this._map.get(a)) {
            this.setValue(a, b);
            return true;
        }
        return false;
    }

    del(a) {
        return this._map.delete(a);
    }

}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};

d=new Dictionary();
d.setValue("JS",true);
console.log(d.getValue("JS"));
console.log(d.change("JAVA", false));
console.log(d.change("JS", "very good"));
d.setValue("Python",3.5);
console.log(d.getValue("Python"));
d.del("Python");
console.log(d.getValue("Python"));





