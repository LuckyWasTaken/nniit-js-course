//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
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
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  const newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[key] = typeof value === "number" ? value * 2 : value;
  }
  return newObj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};