//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (Boolean(!str.length)) return str;
  return str
    .split(" ")
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length < n) return str;
  return str.substr(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var item in obj) return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var item in obj) {
    if (isFinite(obj[item])) obj[item] *= 2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum, curNumber) {
    return sum + curNumber;
  });
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reversedStr = str
    .split("")
    .reverse()
    .join("");
  return str == reversedStr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
