//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {

    return (n^0)==n;  //after 'num^0' we have 'int(n)'
}                     // '==' with autoconversion, for correct work if n='value'(isInteger('7'))

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {             // For a more versatile even()
    const array = [];         // we can add arguments wish default value: 
    for(let i=2;i<=21;i+=2)   // even(min=2,max=20,step=2)
        array.push(i);        // then: for (let i=min;i<=max+1;i+=step) ...  .
                              // If user wants 'массив четных чисел от 2 до 20 включительно', then even()
    return array;             // else user can enter any values for array.     
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum=0;
    for(let i=0;i<=n;i++)
        sum+=i;
    
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    
    return (n!=1) ? n+recSumTo(n-1) : 1;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {

    return (n!=1) ? n*factorial(n-1) : 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n==1)
        return true;

    while (n>=2){
        if (n%2==0){
            if (n==2) //without a step to n=1
                return true;
            n/=2;     //if n%2==0, but n!=2
        }
        else 
            return false; //if n>=2, but n%2!==0.
    }

    return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    //this solution takes a lot of resources, but the code is shot. 
    return (n<=1) ? n : fibonacci(n-1) + fibonacci(n-2); 
}                                                        

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
