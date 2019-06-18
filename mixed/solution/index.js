function onButton1Click() {
    let inputElement = document.getElementById("input1");
    let userIdFromInput = inputElement.value;

    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(function (response) { return response.json(); })
        .then(function (data) {
            
            let tableOfResaults = document.createElement("TABLE");
            document.body.appendChild(tableOfResaults);

            let row = document.createElement("TR");
            tableOfResaults.appendChild(row);

            let cell = document.createElement("TH");
            let text = document.createTextNode("|---UserId---|");
            cell.appendChild(text);
            row.appendChild(cell);

            cell = document.createElement("TH");
            text = document.createTextNode("|---Id---|");
            cell.appendChild(text);
            row.appendChild(cell);

            cell = document.createElement("TH");
            text = document.createTextNode("|---Title---|");
            cell.appendChild(text);
            row.appendChild(cell);

            cell = document.createElement("TH");
            text = document.createTextNode("|---Completed---|");
            cell.appendChild(text);
            row.appendChild(cell);

            data.forEach(function (element) {
                if (element.userId == userIdFromInput) {

                    let row = document.createElement("TR");
                    tableOfResaults.appendChild(row);

                    let cell = document.createElement("TH");
                    let text = document.createTextNode(element.userId);
                    cell.appendChild(text);
                    row.appendChild(cell);

                    cell = document.createElement("TH");
                    text = document.createTextNode(element.id);
                    cell.appendChild(text);
                    row.appendChild(cell);

                    cell = document.createElement("TH");
                    text = document.createTextNode(element.title);
                    cell.appendChild(text);
                    row.appendChild(cell);

                    cell = document.createElement("TH");
                    text = document.createTextNode(element.completed);
                    cell.appendChild(text);
                    row.appendChild(cell);

                }
            })
        })
}