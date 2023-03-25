//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (n > str.length) {
        return str
    } else {
        return str.slice(0, n) + '...'
    }
}

//Определите, пуст ли объект
function isEmpty(obj) {
    return Object.keys(obj).length === 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    Object.keys(obj).map((key) => {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    })
    return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    let ans = true
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            ans = false
        }
    }
    return ans
}

module.exports = {
    capitalize,
    truncate,
    isEmpty,
    multiply,
    sumArr,
    isPali
};
