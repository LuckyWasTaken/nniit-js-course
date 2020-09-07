function GetInfBtnClick(){
    document.getElementById("table").innerHTML = ""
    let array = []
    let array1 = []
    let tab = document.querySelector('#table')
    let text = Number(document.getElementById("text").value)
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/")
    xhr.send()
    xhr.onload = function(){
        let responseObj = xhr.response
        array = JSON.parse(responseObj)
        for (let i = 0; i<array.length-1;i++){
            if (array[i].userId === text)
                array1.push(array[i])
            else
                continue
        }
        addRaws(tab,array1)
    }
}
function addRaws(tab,array){
    for (let i = 0; i<array.length;i++){
        console.log(array[i].userId)
        let row = document.createElement("TR")
        let td1 = document.createElement("TD")
        td1.appendChild(document.createTextNode(array[i].userId))
        let td2 = document.createElement("TD")
        td2.appendChild(document.createTextNode(array[i].id))
        let td3 = document.createElement("TD")
        td3.appendChild(document.createTextNode(array[i].title))
        let td4 = document.createElement("TD")
        td4.appendChild(document.createTextNode(array[i].completed))
        row.append(td1)
        row.append(td2)
        row.append(td3)
        row.append(td4)
        tab.appendChild(row)
    }
}


let button1 = document.getElementById("button1")
button1.addEventListener("click",GetInfBtnClick)