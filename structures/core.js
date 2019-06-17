//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (!str) return str;
  str=str[0].toUpperCase() + str.slice(1);
  for(var i = 0; i<str.lenght; i++){
    if(str[i] == " "){
        str[i].toUpperCase() + str.slice(i+1);
    }
  }
  return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n<str.length)
    return str.slice(0, n)+"...";
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  var counter = 0;
  for (var key in obj) {
    return 0;
  }
  return 1;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
      if((!isNaN(parseFloat(obj[key]))) && (isFinite(obj[key]))){
          obj[key] *= 2;
      }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  for(var i=0;i<Math.round(str.length/2);i++){
    if(str[i] != str[str.length-i-1])
          return false;
    }
    return true;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
