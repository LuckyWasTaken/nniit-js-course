function getArray() {  
  const inputID = document.getElementById("inputID").value;
  const requestID = new XMLHttpRequest();
  const tableID = document.getElementById("tableID");
    requestID.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
    requestID.send();

    const answers = JSON.parse(requestID.response);
      tableID.innerHTML = "<tr>\<th>userID</th>\<th>ID</th>\<th>Text</th>\<th>Status</th>\</tr>";

    for (let i = 0; i < answers.length; i++)
    {
        if (answers[i].userId == inputID) 
        {
            tableID.innerHTML += `<tr><td>${answers[i].userId}</td><td>${answers[i].id - 1}</td><td>${answers[i].title}</td><td>${answers[i].completed}</td></tr>`;
        }
    }
}       