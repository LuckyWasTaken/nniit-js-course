// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b
function sum(a) {
	return  (b) => a + b
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел
function average() {
  let itogo = 0;
  let counter = 0;
  return function(number){
    counter++;
    itogo+=number;
    return itogo/counter
  }
}

module.exports = {
  sum, average
};