//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
    return str;
  }
  const words = str.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (typeof n !== "number" || typeof str !== "string") {
      return;
    }
    return (str.length > n) ? str.slice(0, n) + "..." : str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
    if (obj === null || typeof obj !== "object" ) {
      return;
    }
    return Object.keys(obj).length === 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  if (obj === null || typeof obj !== "object") {
    return;
  }
  Object.entries(obj).forEach(([key, value]) => {
   if (typeof value === "number") {
     obj[key] *= 2;
   }
  });
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  str = str.toLowerCase().replace(/[^a-zа-я]/g, "");
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};