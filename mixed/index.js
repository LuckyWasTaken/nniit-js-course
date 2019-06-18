function getArray()
{
    let inputID = document.getElementById("inputID").value;
    let requestID = new XMLHttpRequest();
    let tableID = document.getElementById("tableID");

    requestID.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
    requestID.send();
    
    let answer = JSON.parse(requestID.response);

    tableID.innerHTML = "<tr>\<th>userID</th>\<th>ID</th>\<th>Text</th>\<th>Status</th>\</tr>";

    for (let i = 0; i < answer.length; i++)
    {
        if (answer[i].userId == inputID) 
        {
            tableID.innerHTML += `<tr><td>${answer[i].userId}</td><td>${answer[i].id - 1}</td><td>${answer[i].title}</td><td>${answer[i].completed}</td></tr>`;
        }
    }
}