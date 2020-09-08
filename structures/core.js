//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(str === '') return '';
  return str[0].toUpperCase() + str.slice(1);
}
//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n < str.length) return str.slice(0,n) + "...";
  return str
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(let i in obj) return false
     return true
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(let key in obj){
    if(Number.isInteger(obj[key])){
        obj[key] = obj[key]* 2
        return obj
      }
    }
    return {}
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((total, amount) => total + amount); 
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str === str.split("").reverse().join("")
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
