// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fullName) {
    if (typeof fullName !== "string" || fullName.split(" ").length < 2){
        return false;
    }

    let [surname = "", name = ""] = fullName.split(" ");

    return (name + " " + surname);
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arrayOfNumbers) {
    if ((!Array.isArray(arrayOfNumbers)) || (arrayOfNumbers.some(isNaN))){
        return null; 
    }

    return Array.from(new Set(arrayOfNumbers));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arrayOfSalaries) {

    /*function isNegative(number) {
        return number <= 0;
    }*/
    let isNegative = number =>  number <= 0;

    if (!Array.isArray(arrayOfSalaries) || !arrayOfSalaries.length || arrayOfSalaries.some(isNaN) || arrayOfSalaries.some(isNegative)){
        return false;
    }

    let max = arrayOfSalaries[0];
    let min = arrayOfSalaries[0];

    min = arrayOfSalaries.reduce(function(min, item){
        if (min > item){
            return item;
        }
        else {
            return min;
        }
    })

    max = arrayOfSalaries.reduce(function(max, item){
        if (max < item){
            return item;
        }
        else {
            return max;
        }
    })

    return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    if ((isNaN(n)) || (n <=0)){
        return false;
    }

    let arr = [];

    for (i = 0; i < n; i++){
        if  (0 === ((i+1) % 15)){
              arr[i] = "FooBar";
        }
         else if (0 === ((i+1) % 3)){
            arr[i] = "Foo";
        }
        else if (0 === ((i+1) % 5)){
            arr[i] = "Bar";
        }
        else {
            arr[i] = i + 1;
        }
    }

    return arr;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
// Добавить слово и его толкование в словарь
// Изменить толкование слова
// Удалить слово из словаря
// Получить толкование по слову
class Dictionary {
    constructor() {
		this.engToRus = new Map;
    }

    addWord(wordEng, wordRus){
        if (typeof wordEng !== "string" || typeof wordRus !== "string" || 0 === wordEng.length || 0 === wordRus.length){
            console.log("Wrong input");
            return false;
        }

        if (!this.engToRus.has(wordEng)){
            this.engToRus.set(wordEng, wordRus);
            console.log("The word " + wordEng + " was added");
        }
        else {
            console.log("The word " + wordEng + " was found in the dictionary");
        }
    }

    changeTranslation(wordEng, wordRus){
        if (typeof wordEng !== "string" || typeof wordRus !== "string" || 0 === wordEng.length || 0 === wordRus.length){
            console.log("Wrong input");
            return false;
        }

        if (this.engToRus.delete(wordEng)){
            this.engToRus.set(wordEng, wordRus);
            console.log("The translation of the word " + wordEng + " was changed");
        }
        else{
            this.engToRus.set(wordEng, wordRus);
            console.log("The word " + wordEng + " was added");
        }
    }

    deleteWord(wordEng){
        if (typeof wordEng !== "string" || 0 === wordEng.length){
            console.log("Wrong input");
            return false;
        }
            
        if (this.engToRus.delete(wordEng)){
            console.log("The word " + wordEng + " was deleted");
        };
    }

    getTranslation(wordEng){
        if (typeof wordEng !== "string" || 0 === wordEng.length){
            console.log("Wrong input");
            return false;
        }
    
        if (!this.engToRus.has(wordEng)){
            console.log("There is no such word in the dictionary");
            return false;
        }

        return this.engToRus.get(wordEng);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference,
    fooBar
};
