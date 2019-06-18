//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(!str)
    return str;
        return str[0].toUpperCase()+str.slice(1);
}
//капитализирует каждое слово
function capitalize(str) {

  return str.replace(/(^|\s)\S/g, function(symbol) {return symbol.toUpperCase()})
 
 }
//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n > str.length)
    return str;
    return str.substring(0,n) + "...";
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
    if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var result;
  result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
return result;}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  for(var i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-i-1]){
        return false;
    }
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
