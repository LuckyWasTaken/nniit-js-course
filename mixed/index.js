const placeholder = document.getElementById("placeholder");

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

function addElement(stringData, tag, row){
    const cell = document.createElement(tag);
    cell.appendChild(document.createTextNode(stringData));
    row.appendChild(cell);
}

function display(filtered) {
    while (placeholder.firstChild) {
        placeholder.removeChild(placeholder.firstChild);
    }

    const table = document.createElement("TABLE");
    placeholder.appendChild(table);

    const row = document.createElement("TR");
    table.appendChild(row);

    for (let d of ["UserId", "Id", "Title", "Completed"]){
        addElement(d, "TH", row)
    }

    filtered.forEach((item) => {
        const subrow = document.createElement("TR");
        table.appendChild(subrow);

        for (let d of [item.userId, item.id, item.title, item.completed]){
            addElement(d, "TD", subrow)
        }
    });
}