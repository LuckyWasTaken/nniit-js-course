//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length>0){
    str=str.substr(0,1).toUpperCase()+str.substr(1,str.length-1)
  }
  return str;
}

function kapitalizator(str) { 
  newStr = ''; 
  str = str.toLowerCase().split(' ',); //Разделяет строку на слова
  for(var i=0; i < str.length; i++) { 
      newStr += str[i].substring(0,1).toUpperCase() + str[i].substring(1,str[i].length) + ' '; //Капитализирует каждое слово
  } 
  return newStr; 
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
if (str.length>=n){
  var resstr=str.substr(0,n);
  return resstr+'...';
}
else
{
  return str;
}
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(key in obj) {
    if(obj.hasOwnProperty(key))
        return false;
}
return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(key in obj) {
    if(obj.hasOwnProperty(key)){
	    if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}
return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  var str2="";
for (i=1;i<=str.length;i++){
  str2+=str[str.length-i];
}
if (str2==str){
  return 1;
}
else
{
  return 0;
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
