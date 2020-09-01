//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.substring(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str;
  }

  return str.substring(0, 26) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false
  }

  return true
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let i in obj) {
    if (typeof (obj[i]) != "string") {
      obj[i] *= 2
    }
  }

  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((sum, current) => sum + current)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str == str.split('').reverse().join('')
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
