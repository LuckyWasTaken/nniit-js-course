// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }
  
  f.toString = function() {
    return currentSum;
  };

  return f;
}


// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() 
{
  let avgValue = [];
  let inputValue = arguments[0];
  return function(inputValue)
  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (avgValue[0] === 0)
    {
      avgValue[0] = inputValue;
      return inputValue;
    }
    avgValue.push(inputValue);
    return avgValue.reduce(reducer) / avgValue.length;
  }
}

module.exports = {
  sum,
  average
}
