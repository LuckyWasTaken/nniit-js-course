 function getArray(){
    let inputId = document.getElementById("inputId").value;
    let idRequest = new XMLHttpRequest();
    let table = document.getElementById("table");

    idRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
    idRequest.send();
    if(idRequest.status != 200){
        return;
    }
    let result = JSON.parse(idRequest.response);

    table.innerHTML = "<tr>\
                        <th>UserId</th>\
                        <th>Id</th>\
                        <th>Title</th>\
                        <th>Completed</th>\
                         </tr>";
    let i = 0;
    for (i = 0; i < result.length; ++i){
        if (result[i].userId == inputId) {
            table.innerHTML +=  `
            <tr>
            <td>${result[i].userId}</td>
            <td>${result[i].id}</td>
            <td>${result[i].title}</td>
            <td>${result[i].completed}</td>
            </tr>`;

         }
    }
}