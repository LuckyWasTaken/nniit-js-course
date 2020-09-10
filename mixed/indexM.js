const inputID = document.getElementById("inputID");
const tableID = document.getElementById("tableID");

function getArray() {
    
    let requestID = new XMLHttpRequest();
    requestID.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
    requestID.send();
    const answers = JSON.parse(requestID.response);
    tableID.innerHTML = "<tr>\<th>userID</th>\<th>ID</th>\<th>Text</th>\<th>Status</th>\</tr>";

    answers.forEach(function(answ) {
        if (answ.userId == inputID.value) {
            tableID.innerHTML += `<tr><td>${answ.userId}</td><td>${answ.id - 1}</td><td>${answ.title}</td><td>${answ.completed}</td></tr>`;
        }
      });
}