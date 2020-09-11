//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1,);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(str.length > n) {
    return str.substr(0, n) + "...";
  }
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(let key in obj) {
    if(isFinite(obj[key]) === true) {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, i) => sum + i);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reverse = str.split('').reverse().join('');
  return reverse === str;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
