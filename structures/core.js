//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str === "") {
    return str;
  }
  let newstr = str.split(" ");
  let backstr = newstr.map(function (word) {
    return word[0].toUpperCase() + word.substr(1);
  })
  return backstr.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length)
    return str;
  return str.substr(0, n) + "..."
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (key in obj)
    return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number')
      obj[key] = obj[key] * 2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, x) => sum + x);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  newStr = str.split("");
  reversenewStr = str.split("").reverse();
  for (let i = 0; i < str.length; i++)
    if (newStr[i] != reversenewStr[i])
      return false;
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
