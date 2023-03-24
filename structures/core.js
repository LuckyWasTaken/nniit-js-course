//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return (!str) ? str : str[0].toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return (n > str.length) ? str : str.slice(0, n) + '...';
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let key in obj) {
    // если заходит в цикл, то не пустой
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return(arr.reduce((sum, newNumber) => sum + newNumber, 0));
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return (str === str.split('').reverse().join('')) ? true : false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
