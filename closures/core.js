// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)

function sum(a) {
  
  return summ;
  
  function summ(b)
  {
    return a+b;
  }
}


function summ(a) {

  let currSum = a;

  function eternal(b) 
  {
    currSum += b;
    return eternal;
  }

  eternal.toString = function() 
  {
    return currSum;
  };

  return eternal;
}


// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {

  let currSumm = 0;
  let n = 0;

  return addNumber;

  function addNumber(num)
  {
  n++;
  currSumm += num;
  return currSumm/n;
  } 
  
}

module.exports = {
  sum,
  average,
  summ
};
