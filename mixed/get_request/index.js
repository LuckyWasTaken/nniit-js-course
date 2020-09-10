const requestBtn = document.getElementById("requestBtn")
const response = document.getElementById("response")
requestBtn.onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {        
    return response.json();
   })
  .then(function(data) {
    const result = []
    const userID = document.getElementById('userID').value
    if (!isFinite(parseInt(userID))) {
        response.innerHTML = "Input id, please"
        return
    }

    for (item of Array.from(data)) {
        if (item.userId == userID ) {
            let tr = document.createElement('tr')
            for (prop in item) {
                let td = document.createElement('td')
                td.innerHTML = item[prop]
                tr.append(td)
            }
            result.push(tr)
        }
    }

    const table = document.getElementById('todoTable')
    for (child of Array.from(table.children).slice(2)) {
        child.remove()
            }
    table.append(...result)
    response.innerHTML = result.length + " Совпадений найдено"
  })
} 