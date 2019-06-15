const startSearchElement = document.getElementById("startSearch");
let dataArray = [];
function find() {
  dataArray = [];
  const id = Number(document.getElementById("id").value);
  fetch("https://jsonplaceholder.typicode.com/todos/", { method: "GET" })
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      const onlyInId = data.filter(function(current) {
        return current.userId === id;
      });
      dataArray.push(onlyInId);
    })
    .then(function() {
      const newTabElement = document.getElementById("tab");
      while(newTabElement.firstChild){
        newTabElement.removeChild(newTabElement.firstChild);
      }
      let rows = dataArray[0];
      rows.unshift({first: "Id", second: "Title", third: "Completed"});
      for (const elements in rows) {
        const newRow = document.createElement("TR");
        newTabElement.appendChild(newRow);
        for (const itemInElement in rows[elements]) {
          if (itemInElement === "userId") continue;
          const newValue = document.createElement("TD");
          newRow.appendChild(newValue);
          newValue.innerHTML = rows[elements][itemInElement];
        }
      }
    });
}

startSearchElement.onclick = find;
