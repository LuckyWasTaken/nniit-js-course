//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (typeof str !== "string") {
        return;
    }

    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (typeof str !== "string" || typeof n !== "number") {
        return;
    }

    return (str.length > n) ? str.slice(0, n) + "..." : str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
    if (typeof obj !== "object" || obj === null) {
        return;
    }

    return Object.keys(obj).length === 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    if (typeof obj !== "object" || obj === null) {
        return;
    }

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] <<= 1;
        }
    }
    return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    if (!Array.isArray(arr)) {
        return;
    }

    return arr.reduce((sum, current) => sum + current, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    if (typeof str !== "string") {
        return;
    }

    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
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
