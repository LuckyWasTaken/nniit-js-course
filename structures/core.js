//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n - 3) + '...';
  }

  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {

  for (var key in obj) {
    if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key]))
      obj[key] *= 2;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0)
return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  var strLen = str.length;
    var result = 0;
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 1;
      } else {
        result = 0;
        return result;
      }
    }
    if (result === 1)  {return true;} else {return false;}
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
