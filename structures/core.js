//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length == 0){
    return '';
  }
     
  return str[0].toUpperCase() + str.slice(1);
}

function capitalizeEveryWord(str) {
  if (str.length == 0){
    return '';
  }

  words = str.split(' ');
  outString = '';
  for (i = 0; i < words.length; ++i){
    outString = outString.concat(capitalize(words[i]), ' ');
  }
     
  return outString;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length){
    return str;
  }

  return str.slice(0, n) + '...';
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return obj == null || obj == undefined || obj.length == 0 || Object.keys(obj).length == 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  keys = Object.keys(obj);
  for (i = 0; i < keys.length; ++i){
    if (typeof(obj[keys[i]]) == 'number'){
      obj[keys[i]] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  while (str.length > 1){
    if (str.at(0) != str.at(-1)){
      return false;
    }
    str = str.slice(1, -1);
  }
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
