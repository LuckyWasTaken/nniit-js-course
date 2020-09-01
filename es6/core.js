// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const arrFio = fio.split(" ")

    if (arrFio.length < 2)
        return "Incorrect input"

    return arrFio[1] + " " + arrFio[0]
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
function calculateSalaryDifference(salaries) {
    if (salaries.length === 0)
        return false

    salaries.sort((a, b) => a - b)
    return salaries[salaries.length - 1] / salaries[0]
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let arr = []

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0)
            arr.push("FooBar")
        else if (i % 5 === 0)
            arr.push("Bar")
        else if (i % 3 === 0)
            arr.push("Foo")
        else
            arr.push(i)
    }

    return arr
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map
    }

    add(word, description) {
        if (typeof (word) == "string" && typeof (description) == "string") {
            this.dictionary.set(word, description)
            console.log("the description was added correctly")
            return true
        }

        console.log("incorrect input, only words please")
        return false
    }

    delete(word) {
        if (this.dictionary.has(word)) {
            this.dictionary.delete(word)
            console.log("the entry is deleted successfully")
            return true
        }

        console.log("the entry is not found")
        return false
    }

    get(word){
        if (this.dictionary.has(word)) {
            return this.dictionary.get(word)
        }

        console.log("the entry is not found")
        return false
    }

    editing(word, description){
        if (!this.dictionary.has(word)) {
            console.log("the entry is not found")
            return false
        }
        if (typeof (description) != "string") {
            console.log("incorrect input, only words please")
            return false
        }

        this.dictionary.set(word, description)
        console.log("the description was changed correctly")
        return true
    }

    clear(){
        this.dictionary.clear()
        return true
    }

    sizeOfDictionary(){
        return this.dictionary.size
    }


}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
