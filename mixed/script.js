function getResult() {
  let prom = fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      return data.filter(
        obj => obj.userId == Number(document.getElementById("value").value)
      );
    })
    .then(data => {
      return data.map(obj => {
        let table = document.getElementById("table");
        let row = table.insertRow();
        let id = row.insertCell();
        id.append(obj.id);
        let title = row.insertCell();
        title.append(obj.title);
        let completed = row.insertCell();
        completed.append(obj.completed);
      });
    });
  return ``;
}
