/*Калькулятор с возможностью добавления и удаления методов. Вообще, нужно было делать немного подругому,
например, связать загрузку опций селектора с функциями объекта, чтобы можно было добавлять дефолтные методы,
а также, это бы позволило сохранять "calc" в cookie или localstorage, что также очень круто. Но, к сожалению,
меня поджимает по срокам курсовая, и на правки нет времени((( */

function Calculator() {          //Создаем дефолтные методы
  let methods = {
      "+": function(a, b) {
        return Number(a) + Number(b);
      },
      "-": function(a, b) {
        return a - b;
      },
      "*": function(a, b) {
        return a * b;
      },
      "/": function(a, b) {
        return a / b;
      }
    };

  this.retMethod=function(n){          //возвращает метод под номером (n)
    return Object.keys(methods)[n];
  };
  this.isMethod=function(method){      //Есть ли метод?
    return method in methods;
  };
  this.calculate = function(op,a,b) {  //Производит вычисления
    return methods[op](a, b);
  };
  this.addMethod = function(name, func) { //добавляет метод
    methods[name] = func;
  };
  this.deleteMethod=function(method){     //удаляет метод
    if (this.isMethod(method)){
      if(index==method){
        index=(method==calc.retMethod(0))?calc.retMethod(1):calc.retMethod(0);  //Проверка, удаляем ли мы выбранный элемент в настоящий момент элемент (и 1 ли он)
      }                                                                         //это важно, тк после удаления метода "на котором мы сидим", нужно перепрыгнуть на 1
      delete(methods[method]);
      return 1;
    }
      return 0;
  }
}

function setResult(){
  result.innerHTML= ' = '+calc.calculate(index,ops[0].value,ops[1].value);  //выводит результат вычислений; нужна, тк на нее ставится таймер
}

function goChange(){                                                        //вызывает функцию вывода результатов
  if(this.tagName=="SELECT"){
    index=options[this.selectedIndex].innerHTML;    //Когда селектор меняется нужно изменять индекс
    setResult();
  }
}

function addOperationF(){                                   //Функция, обрабатывающая кнопку "добавить"
  if(deleteButtonFlag==0){//только открываем "Добавлялку"
    if(addButtonFlag==0){
      newOperatorName.style.display = newOperatorFunc.style.display="block";
      this.innerHTML="Добавить";                                                //показываем поля добавления метода
      this.style.backgroundColor = "green";
      addButtonFlag=1;
      newOperatorName.value = newOperatorFunc.value="";
      return;
    }else{          //если уже открыты поля "добавления"
      newOperatorName.style.backgroundColor=(calc.isMethod(newOperatorName.value))?"rgba(251, 0, 0, 0.53)" : ""; //для корректной подсветки неправильных инпутов
      if(!newOperatorName.value){
        newOperatorName.style.display = newOperatorFunc.style.display = "none";
        this.innerHTML="Новый оператор";        //Если пользователь передумал добавлять метод-пусть просто не вводит имя
        this.style.backgroundColor=newOperatorFunc.style.backgroundColor="";
        addButtonFlag=0;
        return;
      }

      try{      //проверяем, рабочая ли введенная пользователем функция
        let usersFunction=new Function('a,b','a=Number(a);b=Number(b);return '+newOperatorFunc.value+';');
        if(isNaN(usersFunction(1,1))){
          newOperatorFunc.style.backgroundColor="rgba(251, 0, 0, 0.53)";
          return;
        }else{
          newOperatorFunc.style.backgroundColor="";
        }

        if(!calc.isMethod(newOperatorName.value)){                  //если функция работает и такого метода нет, то добавляем новый метод
          calc.addMethod(newOperatorName.value,usersFunction);
          newOperatorName.style.display=newOperatorFunc.style.display="none";
          this.innerHTML="Новый оператор";
          this.style.backgroundColor="";
          addButtonFlag=0;
          let newOption=document.createElement('option');                       //добавление в селектор новых опций
          newOption.innerHTML=newOperatorName.value;
          newOption.setAttribute('class',newOperatorName.value);
          selector.appendChild(newOption);
          newOperatorFunc.style.backgroundColor=newOperatorName.style.backgroundColor="";
          index=newOperatorName.value;
          selector.lastChild.selected="selected";
          if(selector.children.length==1){                                      //если это был первый элемент.
            timerId=setInterval(setResult,0);
          }
          return;
        }
      }catch{
        newOperatorFunc.style.backgroundColor="rgba(251, 0, 0, 0.53)";
      }
    }
  }
}
function deleteOperatorF(){  //Функция, обрабатывающая кнопку "удалить"
  if (!addButtonFlag){ //чтобы нельзя было во время нажатия кнопки добавить удалить операцию(тк используем 1 поле ввода)
    if(!deleteButtonFlag){
      newOperatorName.value="";
      newOperatorName.style.display="block";
      this.innerHTML="Удалить";
      this.style.backgroundColor="red";
      deleteButtonFlag=1;
    }else{
      let eWantToDelete=newOperatorName.value; //поле имени функции

      if(!eWantToDelete){
        newOperatorName.style.display="none";
        this.innerHTML="Удалить оператор";                                    //если пользователь решил не удалять - пусть оставит поле имя пустым
        this.style.backgroundColor=newOperatorName.style.backgroundColor="";
        deleteButtonFlag=0;
        return;
      }
      if(!calc.deleteMethod(eWantToDelete)){
        newOperatorName.style.backgroundColor="rgba(251, 0, 0, 0.53)";  //если не получается удалить
        return;
      }

      let child=selector.querySelector(`[class="${eWantToDelete}"]`); //удаляем
      selector.removeChild(child);
      if(!selector.firstElementChild){
        result.innerHTML=" Добавьте хотябы 1 оператор!"
        clearInterval(timerId);
      }
      newOperatorName.style.display="none";
      this.innerHTML="Удалить оператор";
      this.style.backgroundColor=newOperatorName.style.backgroundColor="";
      deleteButtonFlag=0;
      setResult();          //чтобы при удалении автоматически менялось значение
    }
  }
}

let calc = new Calculator();
let index = calc.retMethod(0); //тут лежит текушая опция из селектора
let ops = document.getElementsByClassName('op'); //тут лежат операнд1 и операнд2
let selector = document.querySelector('.selector'); //наш селектор
let result  = document.querySelector('output');     //блок вывода
let options =  document.getElementsByTagName('option'); //опции
let addOperatorB=document.querySelector('[name="addOperator"]');
let deleteOperatorB=document.querySelector('[name="deleteOperator"]');
let newOperatorName=document.querySelector('.newopname');
let newOperatorFunc=document.querySelector('.newopfunc');
let addButtonFlag=0;    //Похоже на говнокод,и, скорее всего, им и является, но я хз как связать 2 события без флагов между собой
let deleteButtonFlag=0;
let timerId = setInterval(setResult,0);//вешаем такмер для того, чтобы при нажатии на стрелочки в поле операндов, динамически менялось значение(иначе будут задержки)
addOperatorB.addEventListener('click',addOperationF);
deleteOperatorB.addEventListener('click',deleteOperatorF);
selector.addEventListener('change',goChange);
