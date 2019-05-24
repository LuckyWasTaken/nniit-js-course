//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) 
{
  if (!str)
  {
    return str;
  } 

  return str[0].toUpperCase() + str.slice(1);
}


//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
  if(str.length > n) return str.substr(0,n) + "...";
  
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) 
{
  for(let key in obj) 
  {
    if(obj.hasOwnProperty(key))
    {
      return false;
    }
       
  }
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj)
{
  for (let key in obj)
    if (typeof obj[key] == "number" ) 
      obj[key] *= 2;

  return obj;
}


//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 
{
  return arr.reduce((csum,nextitem)=>{return csum+nextitem});
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 
{
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
