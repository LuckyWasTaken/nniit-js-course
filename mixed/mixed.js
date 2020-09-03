const button = document.getElementById("submitButton");

button.onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {        
    return response.json();
   })
  .then(function(data) {
    const res = []
    const userID = document.getElementById('userID').value
    if (isNaN(parseInt(userID, 10))) {
        alert("Wrong number format")
        return
    }

    for (item of Array.from(data)) {
        if (item.userId == userID ) {
            let tr = document.createElement('tr');
            for (prop in item) {
                let td = document.createElement('td');
                td.innerHTML = item[prop]
                tr.append(td)
            }
            res.push(tr)
        }
    }

    const table = document.getElementById('todoTable')
    for (child of Array.from(table.children).slice(2)) {
        child.remove()
    }
    table.append(...res)
  })
}

