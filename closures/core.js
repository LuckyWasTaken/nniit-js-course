// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function(b) {
    return a + b; 
  }

}

// Задание со звездочкой 
function sumHard(a) {

  var totalSum = a;

  function f(b) {
    totalSum += b;
    return f;
  }

  f.toString = function() {
    return totalSum;
  };

  return f;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average(){
   let sum = 0;
   let count = 0;  
  return function(n) { 
    count++;
    sum += n;
    return sum / count;
  }
}; 

module.exports = {
  sum,
  average
};
