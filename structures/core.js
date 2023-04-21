//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {

  if (str !== "") {
    return str[0].toUpperCase() + str.substring(1);
  }

  return '';

  //Задание со звёздочкой
  
  // if (str === "") {
  //   return "";
  // }

  // let arr = str.split(" ");
  // let resultString = '';
  
  // for (let i = 0; i < arr.length; i++) {
  //   resultString += arr[i][0].toUpperCase() + arr[i].substring(1) + " ";
  // }

  // return resultString.slice(0, -1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n <= str.length) {
    return str.slice(0,n) + "...";
  }

  return str;
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
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }

  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((accum, item) => accum + item);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reversed = str.split('').reverse().join('');
  
  return reversed === str;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
