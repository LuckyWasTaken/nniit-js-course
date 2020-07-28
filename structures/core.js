//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str === "") {
        return "";
  }
  const array = str.split(" ");
  const arrayUp = [];
  for (let i = 0; i<array.length; i++) {
      if (array[i] === "") {
            arrayUp.push("");
      }
      else {
        let word = array[i];
        let wordUp = word[0].toUpperCase() + word.slice(1);
          arrayUp.push(wordUp);
          }
        }
  return arrayUp.join(" ");     
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
        return false;
      }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
      if (typeof(obj[key]) === "number") {
        obj[key] = obj[key] * 2;
      }
    }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return (result);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reversedStrring = str.split('').reverse().join('');
  return str === reversedStrring;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
