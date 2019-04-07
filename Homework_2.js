function capitalize(str) {
    return str.split(" ").map(function(item) {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    }).join(" ")
  }

function truncate(str, n) {
  if (n > str.length) {
    return str;
  }
    return str.substr(0, n) + "...";
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
