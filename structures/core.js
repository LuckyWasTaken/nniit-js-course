//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) {
    return str
  }
  let strWords = str.split(' ')
  for (let i = 0; i < strWords.length; i++) {
    strWords[i] = strWords[i][0].toUpperCase() + strWords[i].substr(1)
  }
  return strWords.join(' ')
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + '...'
  }
  return str
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function (total, current) {
    return total + current
  }, 0)
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  str = str.replace(/\s/g, '').toLowerCase()

  return str === str.split('').reverse().join('')
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali,
}
