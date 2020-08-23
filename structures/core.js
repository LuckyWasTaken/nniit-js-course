//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  let arr = str.split(' ');
  let newArr = [];
  let newStr = "";

  arr.forEach(function (item, index, array) {
    if (item !== "") {
      newArr.push(item[0].toUpperCase() + item.substring(1));
    }
    });
    newStr = newArr.join(' ');
    console.log(newStr)
    return newStr;
  }

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n <= str.length) {
    let newStr = str.slice(0, n) + "...";
  }
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) { 
  let count = 0

  for (let key in obj) {
    count ++;
  }

  if (count == 0) {
    return true;
  }
  return count == 0
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj)  {
    if (typeof(obj[key]) == "number") {
      obj[key] = obj[key]*2
    }  
  }
  return obj;
 }

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  const res = arr.reduce(function(sum, cur) {
    return sum + cur;
  }, 0);
  return res;
 }

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  let reverseStr = "";
  
  for (let i = str.length-1; i >= 0; i--) {
    reverseStr += str[i];
    }
    if (reverseStr !== str) {
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
