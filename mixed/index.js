const requestBtn = document.getElementById("requestBtn")
const response = document.getElementById("response")
const styleBtn = document.getElementById("styleBtn")

styleBtn.onclick = function(){
    if (styleBtn.textContent === "Dark theme"){
        styleBtn.textContent = "Light theme"
        document.documentElement.style.setProperty('--red1', 0);
        document.documentElement.style.setProperty('--blue1', 0);
        document.documentElement.style.setProperty('--green1', 0); 
        document.documentElement.style.setProperty('--red2', 184);
        document.documentElement.style.setProperty('--blue2', 204);
        document.documentElement.style.setProperty('--green2', 0);
        document.documentElement.style.setProperty('--red3', 179);
        document.documentElement.style.setProperty('--blue3', 179);
        document.documentElement.style.setProperty('--green3', 179);
        document.documentElement.style.setProperty('--red4', 255);
        document.documentElement.style.setProperty('--blue4', 254);
        document.documentElement.style.setProperty('--green4', 195); 
    }
    else{
        styleBtn.textContent = "Dark theme"
        document.documentElement.style.setProperty('--red1', 255);
        document.documentElement.style.setProperty('--blue1', 255);
        document.documentElement.style.setProperty('--green1', 255); 
        document.documentElement.style.setProperty('--red2', 0);
        document.documentElement.style.setProperty('--blue2', 0);
        document.documentElement.style.setProperty('--green2', 112);
        document.documentElement.style.setProperty('--red3', 63);
        document.documentElement.style.setProperty('--blue3', 0);
        document.documentElement.style.setProperty('--green3', 136);
        document.documentElement.style.setProperty('--red4', 0);
        document.documentElement.style.setProperty('--blue4', 0);
        document.documentElement.style.setProperty('--green4', 0); 
    }
}

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
    response.innerHTML = result.length + " matches found"
    
  })
}