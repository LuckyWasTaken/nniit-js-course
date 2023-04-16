//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    let capitalized = ""
    let isWord = false;
    for (let symb of str){
        // слово начинается
        if (symb !== ' ' && !isWord){
            isWord = true;
            capitalized += symb.toUpperCase();
        }
        // слово заканчивается
        else if (symb === ' ' && isWord){
            isWord = false;
            capitalized += symb;
        }
        else {
            capitalized += symb;
        }
    }
    return capitalized;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (n > str.length) {
        return str;
    }
    return str.slice(0, n) + '...';
}

//Определите, пуст ли объект
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    let newObj = {};
    for ([key, value] of Object.entries(obj)){
        if (!isNaN(value)){
            newObj[key] = value * 2;
        }
        else {
            newObj[key] = value;
        }
    }
    return newObj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce((acc, value) => acc + value, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; ++i){
        if (str[i] !== str[len - i - 1]){
            return false;
        }
    }
    return true;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
