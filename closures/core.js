// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function(b){
    return a+b;}
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average(a) {
  let counter = 0, sum = 0;
  const fcount = function() {
    counter = counter + 1;
    return counter;
  }
  const fsum = function() {
    sum = sum + a;
    return sum;
  }
  return fsum()/fcount();
}

module.exports = {
  sum,
  average
};
