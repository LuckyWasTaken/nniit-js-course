//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' '); 
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + "...";
  } 
  return str; 
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  if (isEmpty(obj)){
    return obj;
  }
  for (let key in obj) {
    if (!isEmpty(obj) && typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reversedWord = str.split("").reverse().join("");
  return str === reversedWord;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
