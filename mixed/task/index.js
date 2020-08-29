document.addEventListener("DOMContentLoaded", () => {
    const requestBtn = document.getElementById("getRequestBtn");
    requestBtn.addEventListener('click', e => {
        e.preventDefault();
        getInfo();
        });
    const indexInput = document.getElementById("index");
    indexInput.addEventListener('change', () => {
        clearTable();
    });
});

function getInfo(){
    let id = getId();
    sendRequestAndCreateTable(id);
}

function getId(){
    let id = document.getElementById("index").value;
    if(id===""){
        alert("empty input");
    }
    if(id <= 0){
        alert("input can't be below zero or zero")
    }
    return id;
}

function sendRequestAndCreateTable(id){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        createTable(data, id);
      });
}

function createTable(data, inputId){
    clearTable();
    let body = document.getElementsByTagName("body")[0];
    let tbl     = document.getElementById("todos")
    let tblBody = document.createElement("tbody");
    for(let i=0; i<data.length; i++){
        if(data[i].userId==inputId){
            let row = document.createElement("tr");
            row.appendChild(createCell(data[i].userId));
            row.appendChild(createCell(data[i].id));
            row.appendChild(createCell(data[i].title));
            row.appendChild(createCell(data[i].completed));
            tblBody.appendChild(row);
        }
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
}

function createCell(text){
    let cell = document.createElement("td"); 
    let cellText = document.createTextNode(text);   
    cell.appendChild(cellText);
    return cell;
}

function clearTable(){
    let tbl = document.getElementById("todos");
    if(tbl.tBodies[0]!=undefined){
        for (let i = tbl.getElementsByTagName('tr').length-1; i; i--) {
            tbl.deleteRow(i);
        }
    }
}


