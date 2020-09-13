let tbody = document.getElementById("tab").getElementsByTagName("TBODY")[0];

function getInfo() {
  const id = parseInt(document.getElementById("idNum").value);

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => {
      let dataFiltredByUserId = data.filter(function(object) {
        return object["userId"] === id;
      });

      outputHtmlList(dataFiltredByUserId);

      console.log("Finished successfully!");
    })
    .catch(() => {
      console.log("Error!");
    });
}


 
function outputHtmlList(data) {
  data.forEach((item, i, data) => {

    const str = document.createElement("TR");
    tbody.appendChild(str);
   
    const tdUserId = document.createElement("TD");
    const tdId = document.createElement("TD");
    const tdTitle =  document.createElement("TD");
    const tdCompleted = document.createElement("TD");

    str.appendChild(tdUserId);
    str.appendChild(tdId);
    str.appendChild(tdTitle);
    str.appendChild(tdCompleted);
   
    keys = Object.keys(item);

    tdUserId.innerHTML = item["userId"];
    tdId.innerHTML = item["id"];
    tdTitle.innerHTML = item["title"]; 
    tdCompleted.innerHTML = item["completed"]; 

  });
}
