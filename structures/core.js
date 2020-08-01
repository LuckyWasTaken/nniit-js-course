//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if(str.length===0)
    return "";
  const separator = " ";
  let arrayOfStrings = str.split(separator);
  let newStr="";
  for (let i = 0; i<arrayOfStrings.length; i++){
     let firstLetter = String(arrayOfStrings[i][0]);
     let partOfWord = String(arrayOfStrings[i]);
     newStr+=firstLetter.toUpperCase()+partOfWord.substr(1);
  }
  return newStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n > str.length)
    return str;
  return str.substr(0,n)+"..."
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(key in obj)
    return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for(key in obj)
    if(typeof obj[key] == "number")
        obj[key]*=2;
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  arr = str.split("");
  reverseArr = str.split("").reverse();
  for(let i = 0; i< str.length; i++)
    if(arr[i]!=reverseArr[i])
      return false;
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
