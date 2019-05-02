let button=document.querySelector('button');
let input=document.querySelector('input');
let div=document.getElementById('getInformation');
button.addEventListener('click',makeTable);

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


function makeTable(){
  let inputValue=input.value;
  if(inputValue){
    fetch('https://jsonplaceholder.typicode.com/todos/',{method:'GET'})

    .then(function(response) {
      if(response.ok) {
      return response.json();
      }
      throw new Error('Произошла ошибка при попытке получить пакеты с сервера!');})

      .then(function(nodes) {
        let oldTable=document.querySelector('#Sorted');
        let table=document.createElement('table');
        setAttributes(table,{'border':'1px solid red',
                             'cellpadding':'5',
                             'id':'Sorted',
                            });
        table.style.marginTop="20px";
        let flag=0;                                                           //флаг нужен чтобы проверять, есть ли такая информация в соответствии с введенным userID, подсвечивать поле ввода
        for(i in nodes){                                                      //и не создавать черный квадратик(пустую таблицу)
          if(nodes[i]["userId"]==inputValue){
            input.style.backgroundColor='';
            flag=1;
            let tdID=document.createElement('td');
            let tdTITLE=document.createElement('td');
            let tdCOMPLETED=document.createElement('td');
            let tr1=document.createElement('tr')
            let tr2=document.createElement('tr')

            tdID.innerHTML=nodes[i]['id'];
            tdID.setAttribute('rowspan','2');
            tdTITLE.innerHTML=nodes[i]['title'];
            tdCOMPLETED.innerHTML=nodes[i]['completed'];

            tr1.appendChild(tdID);
            tr1.appendChild(tdTITLE);
            tr2.appendChild(tdCOMPLETED);

            table.appendChild(tr1);
            table.appendChild(tr2)
          };
        }
        if (oldTable) div.removeChild(oldTable);
        (flag)? div.appendChild(table) : input.style.backgroundColor='rgba(221, 36, 36, 0.67)';
      })
   }
}
