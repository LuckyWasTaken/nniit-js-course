// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(Fio) {
    let _fio = Fio.replace(/<[^>]+>/g,"");
    let [vorname, nachname, ...whatevername] = _fio.split(" "); // destructing assignment plus spread
    return `${vorname} ${nachname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
    function filterUnique(arr) {
        let set = new Set(arr);
        return Array.from(set); // or: return set; ???
    }

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(salaryArr) {
        let minSalary = salaryArr.reduce( function (min,current){
            if (current < min) {return current}
            else {return min};
        },0)
        let maxSalary = salaryArr.reduce( function (max,current){
            if (current > max) {return current}
            else {return max};
        },0)
        return maxSalary / minSalary;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    let resultFooBar = [];
        for(let i = 0, j = 1; j <= n; i++, j++){
        if (j % 15 === 0){resultFooBar[i] = "fooBar";}
        else if (j % 3 === 0){resultFooBar[i] = "foo";}
        else if (j % 5 === 0){resultFooBar[i] = "Bar";}
        else resultFooBar[i] = j;
    }; 
    return resultFooBar;
};
// Я несоклько часов безрезультатно пытался реалзовать через метод map без предварительного цикла, передавая пустой массив опр. размерности, 
// пока не прочитал в спецификации, что callback вызывается только индексами с присовоенными знанчениями. fucked up
/* то же самое только через map
function fooBar (n){
    let resultFooBar = [];
    for (let i = 1; i <=n; i++){
        resultFooBar.push(i);
    };
    return resultFooBar = resultFooBar.map(function(currentItem){
        if (currentItem % 15 === 0) {return 'fooBar'};
        if (currentItem % 3 === 0) {return 'foo'};
        if (currentItem % 5 === 0) {return 'Bar'};
        return currentItem;
    });
}

 */

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor () {
        this._dictMap = new Map ();
    }

    addWord (word, meaning){
        if (typeof word != "string") {return false}; 
        if (word.match(/<[^>]+>/)) {
            alert(`unvalid word`); // but meaning may be an URL as well
        return false;}
        if (this._dictMap.has(word) == true ){
            alert (`This word already exists`);
            return false;}
        else {this._dictMap.set(word,meaning);}
        return true;
    };

    deleteWord (word){
        if (this._dictMap.delete(word) == true) {
            alert (`The word has been deleted`); 
        return true;}
        else alert (`The word you're tryina delete doesn't exist.`);   // "delete" returns true and deletes meaning itself
    };
    getMeaning (word){
       if (this._dictMap.has(word)!= true){
           alert (`The word you're looking for doesn't exist`);
           return false;}
        else {
            return this._dictMap.get(word);}// getting meaning by key-word
            
       };
    getWord (meaning){                                      // no clue how to find a key for its value;
        for(let [key, val] of this._dictMap.entries()){     // the only first meaning found is returned :(
            if (val === meaning) {return key}
            else alert (`Word not found!`);
            return false;
        }};
       
    }


    
        
    }

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
