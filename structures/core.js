//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let buf = [];
  if (str.length >= 1) {
    buf[0] = str[0].toUpperCase();
  }
  for (let i = 1; i <= str.length - 1; i++) {
    if (String.fromCharCode(32) != str[i]) {
      buf[i] = str[i];
    } else {
      buf[i] = String.fromCharCode(32);
      i++;
      buf[i] = str[i].toUpperCase();
    }
  }
  return buf.join("");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n < длина строки - ничего делать не надо)
function truncate(str, n) {
  let buf;

  if (n > str.length) {
    return str;
  } else if (n <= str.length) {
    buf = str.substr(0, n);
    buf += "...";
    return buf;
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  let i = 0;
  for (let key in obj) {
    i++;
  }
  if (i === 0) {
    return true;
  } else {
    return false;
  }
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
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let buf = [];
  let buf2 = [];
  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (String.fromCharCode(32) != str[i]) {
      buf[i] = str[i];
    }
  }
  for (let i = 0; i < buf.length; i++) {
    buf2[i] = buf[i];
  }
  buf2.reverse();
  if (buf.join("") === buf2.join("")) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
