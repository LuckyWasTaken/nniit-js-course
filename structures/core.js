//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1)
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return (n <= str.length) ? str.substr(0, n) + "..." : str
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    if (obj[key].constructor === Number) {
      obj[key] *= 2
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  for (let i = 0; i < Math.floor(str.length / 2); ++i) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
