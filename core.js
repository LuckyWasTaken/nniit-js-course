//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (typeof str !== 'string') {return null};
  return str.replace(/(?:^|\s)\S/g, function(a){ return a.toUpperCase(); } );
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (typeof str !== 'string' || typeof n !== 'number') {return null}; // comparing type of input  with returned str-value of F typeof
  if (str.length < n) {return str;};
  return str = str.substring (0, n) + "..."; // getting string cut from 0- to N-elements 
}

//Определите, пуст ли объект
function isEmpty(obj) {  
  if (!obj) {
  throw new Error ('ERROR! The current object is empty'); // throwing an error
}
else return true;}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  return Object.keys(obj).lenght === 0;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  const initialValue = 0;
  return arr.reduce(function(accumulator, currentValue) {return accumulator + currentValue;},initialValue);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {if (str == "") {return true};
for (let i = 0, j = str.length - 1; i < str.length; i++, j--){
  return str[i] ===  str[j];  
    /* in the manner of JS:
  function isPali(str) {
  let arr = str.split ("");
  arr = arr.reverse();
  arr = arr.join(""); 
  if (arr === str) {return true}
  else return false;}
  //ну или как-то так.//
*/}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
