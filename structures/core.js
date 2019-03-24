//Напишите функцию, которая делает первый символ строки заглавным
//(задание со звездочкой - капитализируйте каждое слово)
/*function capitalize(str) {
  return str.charAt(0).toUpperCase()+str.substr(1);
}*/
function capitalize(str) {
  if(str=="") return str;
  let begWord = 0;
  do {
    str =
      str.substring(0, begWord) +
      str[begWord].toUpperCase() +
      str.substr(begWord + 1);
    begWord = str.indexOf(" ", begWord) + 1;
  } while (begWord != 0);
  return str;
}

<<<<<<< HEAD
//Напишите функцию, которая вернет строку, усеченную до n символов
// и добавляет в конец многоточие (если n < длина строки - ничего
//делать не надо)
function truncate(str, n) {
  if (str[n + 1] == undefined) return str;
  return str.substr(0,n)+"...";
}
=======
//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {}
>>>>>>> d26d84f3e3738bf254277602339f64c6f10a6bc1

//Определите, пуст ли объект
function isEmpty(obj) {
  let empty=0;
  empty=Object.getOwnPropertyNames(obj);
  if(empty==0) return true;
return false;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(key in obj){
    if(typeof obj[key]=="object")
    multiply(obj[key]);
    if(typeof(obj[key])=="number")   
    obj[key]*=2;
  }
  return obj
}

//Напишите функцию, считающую сумму всех элементов массива
//(желательно использовать reduce)
function sumArr(arr) {
  const result = arr.reduce(function(sum, current) {
    return sum + current;
  });
  return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  const len=Math.trunc(str.length/2);
  return str.substr(0,len)==str.split("").reverse().join("").substr(0,len);
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
