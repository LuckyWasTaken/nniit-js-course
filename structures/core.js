//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let result='';
  for (let i=0; i<str.length;i++)
    if(i===0 || str[i-1]===' ')
         result+=str[i].toUpperCase();
    else
        result+=str[i];
  return result; 
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(str.length >n)
    return str.substring(0,n)+'...';
  else
    return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(var key in obj){
    return false;}
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(var key in obj){
    if (!isNaN(obj[key])===true)
      obj[key]*=2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  var sum=arr.reduce(function(previous,current){
    return previous+current;
  },0)
  return sum;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str==((str.split('')).reverse()).join('');
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
