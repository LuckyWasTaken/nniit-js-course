//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    return str.replace(/[\wа-я]\S*/gi, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (str.length > n) {
        return str.substring(0, n) + '...';
    } else {
        return str;
    }
}

//Определите, пуст ли объект
function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            if (typeof obj[key] == 'number') {
                obj[key] *= 2;
            }}
    return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce((total, amount) => total + amount);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    if (str.length %2 === 0){
        length = str.length/2;
    }
    else length = (length - 1)/2;
    let j = length;
    for (let i=0; i<=length;i++){
        if (str.charAt(i)===str.charAt(j)){
            j--;
        }
        else return false;
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