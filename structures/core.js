//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {

 if(!str || typeof str !== "string"){
    return "";
 }
 else {
    let arrayOfString = [];
       arrayOfString = str.split(' ');
    for(let i = 0; i < arrayOfString.length; i++){
       arrayOfString[i] = arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1);
    }
    return arrayOfString;
 }

}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
    if(str.length < n){
        return str;
    }
    else if(!str || typeof str !== "string" || !n || typeof n !== "number"){
        return "Incorrect input";
    }
    else {
        return str = str.substring(0,n) + "...";
    }
}

//Определите, пуст ли объект
function isEmpty(obj){
  if(!obj) {
      return "Incorrect input"
  }
  else{
      for( let key in obj){
          return false;
      }
      return true;
  }

}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    if(!obj) {
        return "Incorrect input"
    }
    else {
        for(let key in obj){
            if(!isNaN(parseFloat(obj[key])) && isFinite(obj[key])){
                obj[key] *= 2;
            }
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
    if(!str || typeof str !== "string"){
        return "Incorrect input";
    }
    let strReverse = str.split("").reverse().join("");
    return str == strReverse;

}
console.log(sumArr([1,2,3]));
module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
