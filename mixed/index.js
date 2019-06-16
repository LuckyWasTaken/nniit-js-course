function search() {
    const id = parseInt(document.getElementById("id").value);
    fetch("https://jsonplaceholder.typicode.com/todos/",{method:'GET'})
        .then(response => response.json())
        .then(data => {
            const filtered = data.filter(function(item){
                return item.userId === id;
            });
            display(filtered);
            console.log("Success!");
        })
        .catch(function(error) {
            console.log('Fetch Error!', error);
        });
}

function display(filtered) {
    let table = document.createElement("TABLE");
    document.body.appendChild(table);

    let row = document.createElement("TR");
    table.appendChild(row);

    let cell = document.createElement("TH");
    let text = document.createTextNode("UserId");
    cell.appendChild(text);
    row.appendChild(cell);

    cell = document.createElement("TH");
    text = document.createTextNode("Id");
    cell.appendChild(text);
    row.appendChild(cell);

    cell = document.createElement("TH");
    text = document.createTextNode("Title");
    cell.appendChild(text);
    row.appendChild(cell);

    cell = document.createElement("TH");
    text = document.createTextNode("Completed");
    cell.appendChild(text);
    row.appendChild(cell);

    filtered.forEach((item) => {
        row = document.createElement("TR");
        table.appendChild(row);

        cell = document.createElement("TD");
        text = document.createTextNode(item.userId);
        cell.appendChild(text);
        row.appendChild(cell);

        cell = document.createElement("TD");
        text = document.createTextNode(item.id);
        cell.appendChild(text);
        row.appendChild(cell);

        cell = document.createElement("TD");
        text = document.createTextNode(item.title);
        cell.appendChild(text);
        row.appendChild(cell);

        cell = document.createElement("TD");
        text = document.createTextNode(item.completed);
        cell.appendChild(text);
        row.appendChild(cell);
    });
}