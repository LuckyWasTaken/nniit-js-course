//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  
  return str.split('').map(Mapper).join('')

  function Mapper(cur, index, string) {

    if (index == 0 || string[index - 1] == " ") {
        return cur.toUpperCase()
    } else {
        return cur
    }
  }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) { 
  if (n <= str.length) {
    return str.slice(0, n) + "..."
  }
  return str
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
  return arr.reduce(function(sum, cur) {
    return sum + cur;
  });
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
