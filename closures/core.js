//Saratovcev Artem 18PI-1

// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) 
{
  let currentSum = a; 

  function fun(b) 
  { 
    currentSum += b; 
    return fun; 
  } 

  fun.toString = function() 
  { 
    return currentSum; 
  }; 

  return fun; 
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() 
{
  let currentSum=0;
  let n=0;
  return function(a)
  {
    currentSum+=a;
    n++;
    return currentSum/n;
  };
}

module.exports = {
  sum,
  average
};
