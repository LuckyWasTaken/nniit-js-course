//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str === '') {
    return str
  }
  let arr = str.split(' ')
  arr = arr.map(a => a[0].toUpperCase() + a.slice(1))
  str = arr.join(' ')
  return str
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n >= str.length) {
    return str
  }
  else {
    return str.slice(0, n) + '...'
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.entries(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  if (Object.values(obj).length > 0) {
    for (let i in obj) {
      if (typeof obj[i] === 'number') {
        obj[i] *= 2
      }
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((a, b) => a+b)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str ===  str.split("").reverse().join("")
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
