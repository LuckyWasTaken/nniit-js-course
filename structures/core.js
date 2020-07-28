//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  const sep = " ";
  const arrIn = str.split(sep);
  let arrOut = [];
  for (let substring of arrIn){
    substring = substring[0].toUpperCase()+substring.slice(1);
    arrOut.push(substring);
  }
  return arrOut.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n >= str.length){
    return str;
  }
  else {
    return str.slice(0,n) + "...";
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (key in obj){
    return false;
  }
  return true;
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
  const arr = [];
  for (let i = 0; i < str.length; i++){
    arr.unshift(str[i]);
  }
  return (str.localeCompare(arr.join("")) == 0);
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
