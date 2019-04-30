//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str.charAt(0).toUpperCase(0) + str.substring(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n > str.length)
    return str;
  return str.substring(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  let m = 0;
  for(let key in obj)
    m++;
  return m == 0 ? 1 : 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(let key in obj) {
    if(typeof(obj[key])==="number" && obj[key] != NaN)
      obj[key]*=2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  function reducer(accum, currValue) {
    return accum + currValue;
  }
  return arr.reduce(reducer);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let arr = str.split('');
  arr = arr.reverse();
  let strReverse = arr.join('')
  return str===strReverse ? 1 : 0;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
