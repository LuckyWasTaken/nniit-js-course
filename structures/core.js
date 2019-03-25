//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(!str){
    return "";
  }
  let arr = [];
  arr = str.split(" ");
  for(let i =0; i< arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return str = arr.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length){
    return str;
  }
  return str.substring(0,n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let i in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let i in obj) {
    let a = obj[i];
    if (typeof a === "number") {
      obj[i] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let sum =0;
  return sum = arr.reduce(function(result, num) {
    return result + num;
  }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str == str.split('').reverse().join('');
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
