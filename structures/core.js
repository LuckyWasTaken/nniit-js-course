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
function multiply(obj) {}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
