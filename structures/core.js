//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    const news = str.replace (/(^|\s)\S/g, (a)=>{return a.toUpperCase()})
    return news
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
        if (str.length<= n)
            return str
        else 
            return str.substring(0,n)+"..."
}

//Определите, пуст ли объект
function isEmpty(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for (let key in obj){
        if (typeof(obj[key])=="number")
            obj[key]*=2
        if (typeof(obj[key])=="object")
            multiply(obj[key])
    }
    return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	return arr.reduce((total, amount) => total + amount)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	return str == str.split('').reverse().join('')
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
