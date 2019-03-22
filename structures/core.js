//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str == ""?"":str[0].toUpperCase()+str.substring(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  return n>str.length?str:str.substr(0,n)+"...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(let key in obj){
    return false;
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj){
    if(Number.isInteger(obj[key])){
      obj[key]*=2;
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let total = arr.reduce(function(a,b){
    return a+b;
  })
  return total;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let strlen = str.length;
  let i,j;
  for (i=0,j=strlen-1; i<strlen;i++,j--){
    if(str[i]==str[j]){
      continue;
    }else{
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
