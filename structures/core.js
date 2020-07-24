//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let strOut = "";
  let inWord = false;
  for (let char of str){
    if (char != " " && inWord == false){
      inWord = true;
      strOut += char.toUpperCase();
    }
    else if(char != " " && inWord == true){
      strOut += char;
    }
    else if (char == " "){
      inWord = false;
      strOut += char;
    }
  }
  return strOut;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  let strOut = "";
  if (n >= str.length){
    return str;
  }
  else {
    strOut += str.slice(0,n) + "...";
    return strOut;
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  let isEmptyResult = true;
  for (key in obj){
    if (key != undefined){
      isEmptyResult = false;
    }
  }
  return isEmptyResult;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (key in obj){
    if (typeof(obj[key]) == "number"){
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, n) => sum + n);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let isPalindrom = true;
  for (let i = 0; i < str.length/2; i++){
    if (str[i] != str[str.length -1 - i]){
      isPalindrom = false;
    }
  }
  return isPalindrom;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};