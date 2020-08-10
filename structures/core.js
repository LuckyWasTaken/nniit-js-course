//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
    if (str=='')
        return str
	else if (str.includes(" ")==false)
		return str[0].toUpperCase()+str.slice(1,)
	else {
        let strarray = str.split(" ")
		let newstr = ''
		for (let i = 0; i<strarray.length;i++){
    			if (i==strarray.length-1)
        			newstr += strarray[i][0].toUpperCase()+strarray[i].slice(1,)
    			else
        			newstr += strarray[i][0].toUpperCase()+strarray[i].slice(1,)+" "
        }
        return newstr	
    }
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
        if (str.length<= n)
            return str
        else 
            return str.substring(0,n)+"..."
}

//Определите, пуст ли объект
function isEmpty(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
    for (let key in obj){
        if (typeof(obj[key])=="string")
            continue
        else
            obj[key]*=2
    }
    return obj
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
	const sum = arr.reduce((total, amount) => total + amount);
	return sum 
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
	return str == str.split('').reverse().join('');
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
