// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b
//(задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)

//решение подсмотрено в интернете (зато честно)
function sum(a) {
  return function(b) {
    return a + b; 
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел
// (если задание не до конца понятно - подглядите тесты :) )
function average() {
  var currentSum = 0;
  var currentCount = 0;

  return function(n) {
    currentSum += n;
    return currentSum / ++currentCount;
  };
}

module.exports = {
  sum,
  average
};
