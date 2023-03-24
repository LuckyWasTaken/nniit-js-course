//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  //return str.capitalized //А, это же не какой-то там свифт, это же самый популярный язык программирования в 2021 и 2022 годах и надо реализовавывать самому...
  //return str.charAt(0).toUpperCase() + str.slice(1); //Ладно, сойдёт
  let bites = str.split(' ');
  for (let i = 0; i < bites.length; i++) {
    bites[i] = bites[i].charAt(0).toUpperCase() + bites[i].slice(1);
  }
  return bites.join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n > str.length) {
    return str.slice(0, n);
  } else {
    return str.slice(0, n) + "...";
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let sum = arr.reduce((total, current) => total + current, 0);
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
