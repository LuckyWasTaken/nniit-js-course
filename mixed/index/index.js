async function get(params) {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/").then
        (
            response => { return response.json(); }
        )
    let table = document.getElementById("tableResult")
    table.innerHTML = "";
    let userId = document.getElementById("inpId").value;
    result = result.filter(record => record['userId'] == userId);
    for (let i = 0; i < result.length; i++) {
        let row = table.insertRow();
        let cell = row.insertCell(0);
        cell.appendChild(document.createTextNode(JSON.stringify(result[i])))
    }
}