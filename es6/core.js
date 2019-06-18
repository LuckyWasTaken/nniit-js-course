// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(str) {
    return `${str.split(/\s/)[1]} ${str.split(/\s/)[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
return Array.from(new Set(arr));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
if(arr.length == 0){
    return false;
} else {
       let minEl = arr.reduce(function(min, element){
    if (min > element){  
        return element;
            } else {
                return min; }
        },arr[0]);
     let maxEl =  arr.reduce(function(max, element){
            if (max < element){  
                return element;
                    } else {
                        return max; }
                },arr[0]);
                return maxEl/minEl;
 } 
}

function calculateSalaryDifference(arr) {
    if(arr.length == 0){
        return false;
    } else {
        return Math.max.apply(null, arr)/Math.min.apply(null, arr);
    }
}
// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    if(n>0){
    let arr = [];
for(let i = 0; i < n;i++){
    if((i+1) % 15 == 0){
arr[i] = "FooBar";
    } else if((i+1) %3 == 0){
arr[i] = "Foo";
    } else if((i+1)%5 == 0){
arr[i] = "Bar";
    } else{
arr[i] = i+1;
    }
 }
 return arr;
} else {
    return;
    }
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами


class Dictionary {
    constructor(){
        this.words = new Map();
    }

    setNewWord(word){
        function isWord(word){
            let count = 0;
            let pos = 0;
            while(true){
                let foundPos = word.indexOf(" ", pos);
                if(foundPos == -1) {break;}
                count++;
                pos = foundPos+1;            
            }
            if(count <= 1 && isNaN(+word.split(/\s/)[0]) && isNaN(+word.split(/\s/)[1])){
                return true;
            } else {
                return false;
            }
        }
        if(!isWord(word))
        return "It is no word";
        this.words.set(this.words.size,word);
    }

    getWord(index){
        return this.words.get(index);
    }

    getAllWords(){
        return this.words;
    }

    deleteWord(index){
        if(this.words.delete(index)){
            return "word deleted";
        }
            return "word not found";
    }      
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
