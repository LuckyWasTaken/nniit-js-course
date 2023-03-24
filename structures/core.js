//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  words = str.split(" ")
  result = []
  for (word of words) {
    result.push(word.charAt(0).toUpperCase() + word.substring(1))
  }
  return result.join(" ")
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n <= str.length)
    return str.slice(0, n) + "...";
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
        obj[key] *= 2
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function (acc, x) { return acc + x; }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str == str.split('').reverse().join('');
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
