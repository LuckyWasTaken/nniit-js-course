//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str.length!=0)
    return str[0].toUpperCase()+str.slice(1);
  else
    return str;
}

function capitalizeAllWords(str) {
    const capitalizeArr=[]; //this is array
    let flag=0; //flag==0 - we are not in the word, flag==1 - we are in the word 

    for (let i=0;i<str.length;i++){
       if (str[i]!=" " && flag==0){     //we enter the word
         flag=1;                        
         capitalizeArr.push(str[i].toUpperCase());
       }
       else if (str[i]==" " && flag==0) //we are not in the word
         capitalizeArr.push(str[i]);    
       
       else if (str[i]!=" " && flag==1) //we are in the word
        capitalizeArr.push(str[i]);     
       
       else if (str[i]==" " && flag==1){ //we got out of the word
        flag=0;
        capitalizeArr.push(str[i]);
       } //line 18-22 can be replaced: else capitalizeArr.push(str[i]);
     }

     let finishLine=''; //we want to have string
     for (let i=0;i<capitalizeArr.length;i++)
       finishLine+=capitalizeArr[i];
     
   return finishLine;
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (n>str.length)
    return str;
  else
    return str.slice(0,n)+'...';
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for (var key in obj){ //if obj is not empty, we can take his keys
    return false;
  }

  return true; //if obj is empty
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj){
    if (typeof(obj[key])==typeof(7)){ //I write 'typeof(7)', becouse in test use int.
      obj[key]=obj[key]*2;
    }
  }

  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {

  return arr.reduce((a,x) => a+=x); //a=arr[0] and we have 1 stage less
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  //for palindrom has some words ('а шорохами зима хороша') 
  let indexHead=0;
  let indexTail=str.length-1;

  while (indexHead<str.length && indexTail>=0){

    if (str[indexHead]==str[indexTail] && indexHead<indexTail){
      indexHead++;
      indexTail--;
    }

    else if (str[indexHead]==' ' && str[indexTail]!=' ') {
      indexHead++;
    }
    else if (str[indexHead]!=' ' && str[indexTail]==' ') {
      indexTail--;
    }

    else if (str[indexHead]==str[indexTail] && indexHead==indexTail) { //'дед'
      return true;
    }
    else if (str[indexHead]==str[indexTail] && ((indexTail-indexHead)==1)) {//'2002'
    return true;
    }

    else if (str[indexHead]!=str[indexTail]){
      return false;
    }
  }
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
