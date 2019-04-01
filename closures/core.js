// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) { // работает с любым количеством чисел
	let value = a;
	function subSum(b) {
		return sum(a + b);
	}
	subSum.toString = subSum.valueOf = function() {
		return value;
	};
	return subSum;
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
const avg = average();


module.exports = {
	sum,
	average,
};





