function capitalize(str) {
  let arr = str.split(" "); //разбиваем строку на массив
  let upperWord = [];
  for (let i = 0; i < arr.length; i++) {
    //для каждого слова i меняем первую букву на заглавную
    let word = arr[i][0].toUpperCase() + arr[i].slice(1); //и приклеиваем хвост
    upperWord.push(word); //кладем получившееся слово в массив
  }
  var newStr = upperWord.join(" "); //склеиваем новую строку
  return newStr;
}

function truncate(str, n) {
  if (n > str.length) {
    return str;
  } else {
    return str.substr(0, n) + "...";
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function multiply(obj) {
  /*проверяем лежит ли число в свойстве*/
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  for (let key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2; //если лежит число умножаем его на 2
    }
  }
}

function sumArr(arr) {
  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return result;
}

function isPali(str) {
    /*ломаем->переворачиваем->склеиваем->проверяем*/
  return str == str.split("").reverse().join(""); 
}
