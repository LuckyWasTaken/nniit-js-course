// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) { 
  let currSum = a;

  function f(b) {
    currSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let sum = 0;
  let count = 0;
  return function(num) {
    sum += num;
    return sum/++count;
  };
}

module.exports = {
  sum,
  average
};
