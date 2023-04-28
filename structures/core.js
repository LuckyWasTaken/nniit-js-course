//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
  return "";
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str;
  }
  if (str.length > 0) {
    return str.slice(0, n) + "...";
  }
  return "";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return (Object.keys(obj).length > 0 ? false : true);
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
      for (let [key, value] of Object.entries(obj)) {
        if (typeof value === 'number') {
            obj[key] *= 2
        }
    }
    return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str.toLowerCase() == str.toLowerCase().split("").reverse().join("")
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};

let str = "abcdefg";
console.log(truncate(str, 0));