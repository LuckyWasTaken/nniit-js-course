//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
	var a = str.split(' ');
	for (var i = 0; i<a.length; i++ ){
		a[i] = a[i][0].toUpperCase()+a[i].substr(1);
	}
	return a.join(' '); 
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if(n > str.length){return str;}
	return str.substr(0,n)+"...";
}

//Определите, пуст ли объект
function isEmpty(obj) {
  return !keys(obj).length
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
for (var i = 0; i < keys(obj).length; i++){
    if(isInteger(obj[keys(obj)[i]])){
		obj[keys(obj)[i]] *= 2;
    }
}
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce(function(s,element){ return s+element; },0);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
    if(str == ""){ return true; }
    return (str[0] == str[str.length-1]) && g(str.substr(1,str.length-2)) ;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
