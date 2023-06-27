//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length === 0) {
    return str;
  }
  
  const words = str.split(" ");
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  return capitalizedWords.join(" ");
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length < n) {
    return str;
  }

  return str.slice(0, n) + "...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
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
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
