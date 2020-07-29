// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  let total = a
  
  function adding(s) {
      total += s
      return adding
  }
  adding.toString = function() {
      return total
  }
  return adding
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let store = []

  function avr(a) {
    store.push(a)
    return store.reduce((acc, cur) => acc + cur) / store.length
  }

  return avr
}

module.exports = {
  sum,
  average
};
