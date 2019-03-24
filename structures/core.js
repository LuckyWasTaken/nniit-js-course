
//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
    if (n > str.length) {
        return str;
    }
    let symbol = '...';
    return str.substr(0, n) + symbol;
}

//Определите, пуст ли объект
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for (let key in obj) {
        if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i]) {
            result = 'true';
        } else {
            result = 'false';
            return result;
        }
    }
    return result;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
