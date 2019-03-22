//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (!str || typeof (str) !== "string") {
        return "";
    }
    let separators=" ,.?!";
    for (let i=0;i<separators.length;i++) {
        let arr = str.split(separators[i]);
        arr = arr.map(function (item) {
            if (!item||typeof(item)!=="string") {
                return "";
            }
            return item[0].toUpperCase() + item.substr(1);
        });
        str = arr.join(separators[i]);
    }
    return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (str.length<n){
        return str;
    }
    return str.substr(0,n)+"...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
    return Object.keys(obj).length===0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for (let key in obj){
        if (typeof (obj[key])=="number"){
            obj[key]*=2;
        }
    }
    return obj;

}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce(function(sum,current){
        return sum+current;
    },0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    for (let i=0;i<str.length/2;i++){
        if (str[i]!=str[str.length-1-i]){
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
