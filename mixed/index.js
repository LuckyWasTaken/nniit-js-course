const placeholder = document.getElementById("placeholder");

function getRequest() {
    let request = new XMLHttpRequest();
    let myId = document.getElementById('id').value;
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', false);
    request.send();
    let ans = JSON.parse(request.response);
    let table = document.getElementById('tableResult');
    ans.forEach((item, i, ans) => {
        if (item.userId == myId) {
           table.innerHTML +=  `
           <tr>
           <td>${item.userId}</td>
           <td>${item.id}</td>
           <td>${item.title}</td>
           <td>${item.completed}</td>
           </tr>`;
        }
    });
       
}

