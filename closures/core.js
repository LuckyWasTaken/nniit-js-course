// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  var currSum = a;

  function next(b) {
    currSum += b;
    return next;
  }
  valueOf.next = currSum;
  next.toString = function() {
    return currSum;
  };

  return next;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let counter = 0;
  let sum = 0;
  return function (value)
  {
    sum += value;
    counter++;
    return sum/counter;
  }
}

module.exports = {
  sum,
  average
};
