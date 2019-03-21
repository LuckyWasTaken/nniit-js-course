//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let s=str.length;
  if (s<1){
    return str='';
  }
  str =str [0].toUpperCase() + str.slice(1) ;
  return str;
}


//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
if (n<str.length){
  str= str.substring(0, n)+ '...';
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
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
    return obj;
  }

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
let sum = arr.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let arr=str.split("");
  arr=arr.reverse();
  arr= arr.join("");
  return str === arr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};