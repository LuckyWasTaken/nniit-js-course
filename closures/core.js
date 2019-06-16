// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  
 return function(b)
 {
   return a+b;
 };
 

}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  mas =[];
  return function(a) {
    mas[mas.length]=a;
    sum = 0;
    for(i = 0;i<mas.length;i++)
      sum +=mas[i];

    return sum/mas.length;
  };
}

module.exports = {
  sum,
  average
};
