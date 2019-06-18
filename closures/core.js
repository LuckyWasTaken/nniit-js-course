// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function(b) {
    return a + b; 
  }; 
}

function sum(a) {
  var currentSum = a;
  function add(b) {
    currentSum+=b;
    return add;
  }
    add.toString = function(){
      return currentSum;
    };
  return add;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )


function average() {
var counter = 1;
var summa = 0;
  return function(n) { 
    return (summa+=n)/(counter++);
  };
}   

module.exports = {
  sum,
  average
};
