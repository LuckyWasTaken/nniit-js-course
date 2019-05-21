// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
    let currentSum = a;
    
    function plus(b){
        currentSum += b;
        return plus;
    }
    
    plus.toString = function() {
        return currentSum;
    };
    
    return plus;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let counter = 0;
  let sum = 0;

  function addANumber(a) {
    sum += a;
    counter++;
    let ans = sum / counter;
    return ans;
  };
  
  return addANumber;
}

module.exports = {
  sum,
  average
};
