//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let arr = str.split(' ');
  let newStr = "";

  arr.forEach(function (item, index, array) {
    if (item === "")
        return newStr;
    else if (index === array.length - 1) {
      let word = item[0].toUpperCase() + item.substring(1);
      newStr += word;
    }
    else {
      let word = item[0].toUpperCase() + item.substring(1) + " ";
      newStr += word;
    }
  })

  return newStr;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n <= str.length) {
    let newStr = str.slice(0, n) + "...";
    return newStr;
  }
  else
    return str;
}

//Определите, пуст ли объект
function isEmpty(obj) { 
  let count = 0

  for (let key in obj) {
    count ++;
  }

  if (count == 0)
    console.log("Объект пуст");
  else
    console.log("Объект не пуст");
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj)  {
    if (typeof(obj[key]) == "number")
      obj[key] = obj[key]*2
      console.log("Ключ: " + key + " значение: " + obj[key]);
  }
 }

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  let res = arr.reduce(function(sum, cur) {
    return sum + cur;
  }, 0);

  return res;
 }

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str){
  let subStr = "";
  let pos = 0;
  let isPali = 0;
  
  for (let i = str.length-1; i >= str.length/2; i--){
    subStr += str[i];
  }
  
  for (pos in subStr){
    if (subStr[pos] == str[pos])
      isPali = 1;
    else{
      isPali = 0;
      break;}
  }

  if (isPali == 0)
    console.log("Слово не является палиндромом.");
  else
    console.log("Слово является палиндромом.");
}


module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
