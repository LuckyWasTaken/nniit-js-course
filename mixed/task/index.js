document.getElementById('button1').addEventListener("click", request);

function request(){
    const request  = new XMLHttpRequest();
    let arr;
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    request.send();
    request.onreadystatechange = function(){
        if (request.status !== 200){
            alert(request.status + ": " + request.statusText);
        }
        else{
            arr = JSON.parse(request.responseText);
            let lastTable = document.getElementById("makeTable");
            if(lastTable){
                lastTable.parentNode.removeChild(t);
                output(arr);
            }
            else{
                output(arr);
            }
        }
    }
}

function output(arr){
    const userid = Number((document.getElementById('elem1').value));
    let table = document.createElement('table');
    table.id = "makeTable";
    let row_head = table.insertRow();
    for(key in arr[0]){
        row_head.insertCell().innerHTML = key;
    }
    arr.forEach(item => {
        if(item["userId"] == userid){
            let row = table.insertRow();
            for(const key in item){
                let cell = row.insertCell().innerHTML = item[key];
            }
        }
    });
    document.body.appendChild(table);
}