//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)function capitalize(str) {
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

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum, cur){ return sum + cur; }, 0);
}
//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            if (typeof obj[key] == 'number') {
                obj[key] *= 2;
            }}
    return obj;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if (str.length > n) {
        return str.substring(0, n) + '...';
    } else {
        return str;
    }
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