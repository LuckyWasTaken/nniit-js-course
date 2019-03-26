//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {

 if(!str || typeof str !== "string"){
    return "";
 }
    let arrayOfString = arrayOfString = str.split(' ');
    for(let i = 0; i < arrayOfString.length; i++){
       arrayOfString[i] = arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1);

    return arrayOfString;
 }

}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if(!str || typeof str !== "string" || !n || typeof n !== "number"){
        return null;
    }
    if(str.length < n){
        return str;
    }

    return str = str.substring(0,n) + "...";

}

//Определите, пуст ли объект
function isEmpty(obj){
  if(!obj) {
      throw new Error();
  }

  for( let key in obj){
      return false;
  }
  return true;


}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    if(!obj) {
        return null;
    }
    for(let key in obj){
        if(!isNaN(parseFloat(obj[key]))){
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
    if(typeof str !== "string"){
        return false;
    }
    let strReverse = str.split("").reverse().join("");
    return str == strReverse;

}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
