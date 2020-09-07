// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(name, ...description) {
    if ((name + ' ' + description)!=undefined){
        let [lastname,firstname,middlename] = (name + ' ' + description).split(' ')
        return (`${firstname} ${lastname}`)
    }
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let set = new Set()
    for (let i = 0; i<arr.length; i++){
        set.add(arr[i])
    }
    return Array.from(set)
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (arr.length==0){
        return false
    }
    let min = arr[0]
    let max = arr[1]
    let a = arr.reduce(function(previousValue,currentValue){
        if (min>currentValue)
            min = currentValue
        else if (max<currentValue)
            max = currentValue
        return currentValue
    })
return parseInt(max/min)
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(arr) {
    let array2 = arr.map(function(currentValue){
        if (currentValue%15==0){
            currentValue = 'fooBar'
        }
        else if (currentValue%3==0){
            currentValue = 'foo'
        }
        else if (currentValue%5==0){
            currentValue = 'Bar'
        }
        return currentValue
    })
    console.log(array2)
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {

    constructor(){
        this._collection = new Map()
        this.__count = 0
    }

    add(value){
        if (typeof(value)=="string"){
            this._collection.set(this.__count++,value)
        }
        else
            throw new SyntaxError("Неверный тип данных!")
    }

    delete(value){
        this._collection.delete(value)
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
