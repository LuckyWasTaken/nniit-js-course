// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(name = 'UserName', sername = 'UserSerame', patronymic = 'UselessString') { //patronymic = отчество по-английски 0_о
    return (`${name} ${sername}`);
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(givenArray) {
    let mySet = new Set();
    let resaultArray = [];
    for (let index = 0; index < givenArray.length; index++) //я честно пытался написать for each(), но что-то не сраслось
    {
        if (!mySet.has(a[index])) //можно было бы вернуть массив, составленный из элементов сета, но я постарался сохранить порядок элементов исходного массива
        {
            resaultArray.push(a[index]);
            mySet.add(a[index]);
        }
    }
    return resaultArray;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(givenArray) {
    let minElement = givenArray.reduce(function(minimum, current) {
        if (minimum > current) return current;
        else return minimum;
    }, givenArray[0]);
    let maxElement = givenArray.reduce(function(maximum, current) {
        if (maximum < current) return current;
        else return maximum;
}, givenArray[0]);
    return maxElement / minElement;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n = 100) {
    let resaultArray = [...Array(100)].map((_, index) => index + 1);
    resaultArray = resaultArray.map(n => `${n % 3 ? '' : 'foo'}${n % 5 ? '' : 'Bar'}` || n);
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary 
{
    constructor()
    {
        this._dictionaryMap = new Map();
    }
    
    pushWordToDictionary(word, meaning) 
    {
        if (typeof word == typeof "string" && typeof meaning == typeof "string"){
            this._dictionaryMap.set(word, meaning);
        }
        return;
    }
    
    deleteWordFromDictionary(word) 
    {
        if (typeof word == typeof "string")
        {
            this._dictionaryMap.delete(word);
        }
        return;
    }
    
    getWordMeaning(word)
    {
        if (typeof word == typeof "string")
        {
            return this._dictionaryMap.get(word);
        }
        return;
    }
    
    clearDictionary()
    {
        this._dictionaryMap.clear();
        return;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
