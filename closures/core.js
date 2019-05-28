// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function (b) {
     return a + b;      
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
let store = [];
function average (num) {
    store.push(num);
    let sum = 0;
    for (let number of store) {
        sum += number;
    }
    return sum / store.length;
}


module.exports = {
  sum,
  average
};
