//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str === ""){
    return str;
  }
  let arr = str.split(" ");
  let arrUpper = arr.map(function(singleWord){
    return singleWord[0].toUpperCase() + singleWord.substr(1);
  })
  let answerStr = arrUpper.join(" ");
  return answerStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + '...';
    // итоговая длина равна maxlength
  }
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
    console.log(typeof(key));
    if (typeof(obj[key]) === typeof(2)){
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum, cur){ return sum + cur; }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let arr = str.split("");
  arr.reverse();
  let newStr = arr.join("");
  return str === newStr;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
