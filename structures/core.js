//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let firstSymbol = str.charAt(0).toUpperCase();
  return firstSymbol + str.substr(1, str.length-1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
  let buf;
  if (n > str.length) {
    return str;
  }
  buf = str.substr(0, n);
  buf+=("...");
  return buf;
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
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex)
    if (str[leftIndex++] != str[rightIndex--]) return false;
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
