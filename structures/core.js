//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
  return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str;
  }
  return str.substr(0, n) + "...";
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
  for (let key in obj) {
    if (!isNaN (obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}


//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
var arr = str.split("");
arr.reverse();
return arr.join("") === str ? true : false
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
