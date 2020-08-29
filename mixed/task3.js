const form = document.getElementById('form');
const userID = document.getElementById('userId');
const infoForUser= document.getElementById('infoForUser');

form.addEventListener('submit', e => {
    
    e.preventDefault();

    if (userID.value < 0 || userID.value > 10 || userID.value == ""){
        alert("Incorrect data!")
        return
    }
  
   fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(function(response){
             return response.json();
        })
        .then(function(data){

            if (form.children.length == 2){          //because form has "userId" and "button". This is the first time
                form.appendChild(createTable(data)); //use createTable()
                userID.value="";
            }
    
            else {                                    //  > 2, because form has "userId", "button" and "tabale"
                form.removeChild(form.children[2]);   // delete old table
                form.appendChild(createTable(data));  // create new table
                userID.value="";
           }
        })
})

function createTable(data){

    const table = document.createElement('table'); 
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody'); 

    table.appendChild(madeHead(thead, data));  //use madeHead()
    table.appendChild(madeBody(tbody, data));  //use madeBody()

    return table;
}

function madeHead(tableHead, data){

    const tr = document.createElement('tr');
    for (let key in data[0]){
        const td = document.createElement('td');
        td.innerText = "  " + key.charAt(0).toUpperCase() + key.slice(1) + "  ";
        tr.appendChild(td);
    }
    tableHead.appendChild(tr);

    return tableHead;
}

function madeBody(tableBody, data){

    for (let item of data){
            const tr = document.createElement('tr');
            if (item['userId'] == userID.value){
                 
                 for (let key in item){
                    const td = document.createElement('td');
                    td.innerText = item[key];
                    tr.appendChild(td);
                }
            }
           tableBody.appendChild(tr);
        }

    return tableBody;
}