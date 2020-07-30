function sum(a) {
	return function(b){return a+b;}
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
	let count = 0;
	let avg = 0;
	return function(b){
		avg+=b;
		count++;
		avg/=count;
		return avg;
	}
}
