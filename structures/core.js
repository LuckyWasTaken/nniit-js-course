//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  var words = str.split(" ");
  var capWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
  return capWords;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length <= n) {
    return str;
  }
  return str.slice(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for ([key, value] of Object.entries(obj)) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, number) => sum + number, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  if (str === str.split("").reverse().join("")){
    return true;
  }
  return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
