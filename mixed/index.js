function send(){
    let myId = document.getElementById('id').value;
    if (myId > 10) {
        alert('Nothing to show!');
        return;
    }
    let req = new XMLHttpRequest();
    let table = document.getElementById('table');

    req.open('GET', 'https://jsonplaceholder.typicode.com/todos/', false);
    req.send();
    let ans = JSON.parse(req.response);

    table.innerHTML = '<tr><th>UserId</th><th>Id</th><th>Title</th> <th>Completed</th> </tr>';
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