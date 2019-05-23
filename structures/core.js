//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i ++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1,str[i].length);
  }
  str = str.join(' ');
  return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    return str.substring(0,n);
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (let i in obj){
    if (obj.hasOwnProperty(i)) return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let i in obj){
    if (+obj[i]){
      obj[i] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var ans = arr.reduce(function(s, i){
    return s + i;
  },0)
  return ans;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str == str.split(' ').reverse().join(' ');
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
