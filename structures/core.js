//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
    return str;
  }
  let totalStr = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    totalStr += temp[0].toUpperCase() + temp.slice(1);
  }
  return totalStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str;
  }
  const newStr = str.slice(0, n) + "...";
  return newStr;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (key in obj) {
    return 0;
  }
  return 1;
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
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let arr = str.split("");
  arr.reverse();
  return arr.join("")=== str?true:false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
