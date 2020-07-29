//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {

  return str.split('').map(forMap).join('')

  function forMap(currentValue, index, array) {

    if (array[index - 1] == ' ' || index == 0) {
        return currentValue.toUpperCase()
    } else {
        return currentValue
    }
  }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str
  }
  return str.slice(0, n) + '...'
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let item in obj) {
    return false
  }
  return true
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    if (typeof(1) === typeof(obj[key])) {
      obj[key] *= 2 
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
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
