//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(str){
    return str[0].toUpperCase()+str.substring(1);
  }else{
    return str;
  }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length>n){
      return str.slice(0,n)+'...';
  }else{
    return str;
  }
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
    if(Number.isInteger(obj[key])){
      obj[key]=obj[key]*2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let lenOfChPart=str.length/2;
  let half=str.slice(lenOfChPart+1);
  half.split('').reverse().join('');
  if(str.slice(0,lenOfChPart)===half){
    return true;
  }else{
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
