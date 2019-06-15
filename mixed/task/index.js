let tableElement=null;

function filterTable(){
    if(tableElement){
        tableElement.parentNode.removeChild(tableElement);
    }
    const searchId=Number(document.getElementById("inputText").value);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(function(response){
          return response.json();
      })
      .then(function(data){
        const filtered = data.filter((obj)=>obj["userId"] === searchId);
        createTable(filtered)
      });
}

function createTable(data){
    let table=document.createElement("table");
    let tableBody=document.createElement("tbody");
    let row = document.createElement("tr")
    for(key in data[0]){
        let cell = document.createElement("td");
        let cellText = document.createTextNode(key);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
    for(let obj of data){
        let row = document.createElement("tr")
        for(key in obj){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(obj[key]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
    tableElement=table;
}