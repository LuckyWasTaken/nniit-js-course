//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str==='') {
      return str;
    }
    const strNew = str.split(' ');
    for (let i=0; i<strNew.length; i++){
      strNew[i]= strNew[i][0].toUpperCase() + str.slice(1);
    }
    return strNew.join(' ');
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length<n+1) {
      return str;
    }
    return (str.substr(0, n) + '...');
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
      if (!isNaN(parseFloat( obj[key] )) && isFinite( obj[key])){
        obj[key] *= 2;
      }
    }
    return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(sum, current) {
      return sum + current;
    }, 0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  strNew = str.split("").reverse().join("");
    if (str === strNew){
      return true;
    }
    else {
      return false;
    }
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
