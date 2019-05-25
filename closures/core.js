// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  let summary = a;
  return function(b) {
    summary += b;
    return summary;
  };
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let result = 0;
	let counter = 0;
	return function(number) {
		result += number;
		counter++;
		return result / counter;
	};
}

module.exports = {
  sum,
  average
};
