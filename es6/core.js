// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(strFio) {
    const arrFio = strFio.split(" ");
    const [surname,name] = arrFio; 
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    const set = new Set(arr);
    return [...set]
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(arr) {
    if (arr.length == 0){
        return false;
    }
    const min = arr.reduce((minTemp, currentValue) => currentValue < minTemp ? currentValue : minTemp);
    const max = arr.reduce((maxTemp, currentValue) => currentValue > maxTemp ? currentValue : maxTemp);
    return max / min;
}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
    const fun = () => Array.from({length: n}, (v, k) => {
        return (++k % 3 == 0) ? "foo" : ((k % 5) == 0 ? "bar" : k);
    });
    return fun();
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {

    _wrong_symbols = `${"1234567890!@#$%^&*()_+-=\|/~,.?;:'"}${'"`'}${" "}`;
    _wrong_symbol_alert = "Alert: wrong symbol in the word";
    _word_is_not_found_alert = "Alert: word is not found";
    _word_added_alert = "Word added successfully";
    _word_deleted_alert = "Word deleted successfully";

    constructor(){
        this._words = new Map();
        this._message = "";
    }

    _getMessage(){
        return this._message;
    }

    _setMessage(strMessage){
        this._message = this._message.replace(this._message, strMessage);
    }

    _checkWord(strWord){
        for (let symb of this._wrong_symbols){
            if (strWord.includes(symb)){
                throw new Error("Wrong symbol in word");
            }
        }
    }

    _checkIncluded(strWord){
        if (!(this._words.has(strWord))){
            throw new Error("Word is not found");
        }
    }

    addWord(strWord, strDescription){
        try{
            this._checkWord(strWord);
            this._words.set(strWord, strDescription);
            this._setMessage(this._word_added_alert);
        }
        catch(e){
            if(e.message == "Wrong symbol in word"){
                this._setMessage(this._wrong_symbol_alert);
            }
            else {
                throw e;
            }
        }
        console.log(this._getMessage());
    }

    deleteWord(strWord){
        try{
            this._checkIncluded(strWord);
            this._words.delete(strWord);
            this._setMessage(this._word_deleted_alert);
        }
        catch(e){
            if (e.message == "Word is not found"){
                this._setMessage(this._word_is_not_found_alert);
            }
            else {
                throw e;
            }
        }
        console.log(this._getMessage());
    }

    printDescription(strWord){
        try{
            this._checkIncluded(strWord);
            this._setMessage(`${strWord} - ${this._words.get(strWord)}`);
        }
        catch(e){
            if (e.message == "Word is not found"){
                this._setMessage(this._word_is_not_found_alert);
            }
            else {
                throw e;
            }
        }
        console.log(this._getMessage());
    }

    printAll(){
        for (let word of this._words.keys()){
            this.printDescription(word);
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

console.log(calculateSalaryDifference([2,3,4,5]));
