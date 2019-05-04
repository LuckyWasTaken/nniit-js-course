//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) 
{
  var charCode = str.charCodeAt(0);
  var index=0;
  if  ( ( (charCode>1071)&&(charCode<1104) ) || ( (charCode>96)&&(charCode<123) ) )
  {
    let ch = String.fromCharCode(charCode-32);
    str = str.substr(0, index) + ch + str.substr(index + 1);
  }
  return str;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
  var newStr='';
  let len=str.length;
  if (n<len)
  {
    {
    for (let i=0; i<n;i++)
      newStr+=str[i];
   newStr+='...';
    }
    return newStr;
  }
  else 
    return str;
}

//Определите, пуст ли объект
function isEmpty(obj) 
{
  for (let key in obj)
    return false;
  return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) 
{
  for (var key in obj)
  {
    if (isFinite(obj[key])==true) 
    {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 

{
  var res;
  res = arr.reduce(function (sum,current)
  {
    return sum + current;
  },0);
  return res;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 

{
  let len=str.length;
  let num =Math.floor(len/2);
  let res=0;
  for (let i=0;i<num;i++)
  {
    let k=len-i-1;
    if (str[i]==str[k])
      res++;
  }
  if (res==num)
    return true;
  else 
    return false;
}


module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
