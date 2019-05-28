//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + '...'
  } else {
    return str;
  }
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
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    } else {
      obj[key];
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr == str ? true : false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
