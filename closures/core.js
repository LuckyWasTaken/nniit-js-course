// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function (b) 
  {
      return a + b;  
  }
}


// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() 
{
  let avgValue = [];
  avgValue.push(0);
  let inputValue = arguments[0];
  return function(inputValue)
  {
      if (avgValue[0] == 0)
      {
        avgValue[0] = inputValue;
        return inputValue;
      }
      else
      { 
        avgValue.push(inputValue);
        currentAvgValue = 0;
        for (var i=0; i<avgValue.length; i++)
        {
          currentAvgValue = currentAvgValue + avgValue[i];
        } 
        return currentAvgValue / avgValue.length;
      }
  }
}

module.exports = {
  sum,
  average
}
