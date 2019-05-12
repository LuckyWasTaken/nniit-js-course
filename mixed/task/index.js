document.getElementById('get').addEventListener("click", makeRequest);

function makeRequest(){
    const request  = new XMLHttpRequest();
    let arr;
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState != 4) {
            return;
        }
        if (request.status != 200){
            alert(request.status + ": " + request.statusText);
        }else{
               try{
                   arr = JSON.parse(request.responseText);
               }catch(exception){
                   alert(exception.message)
               }
               let t = document.getElementById("sortedTable");
               if(t){
                   t.parentNode.removeChild(t);
                   sort(arr);
               }else{sort(arr);}
        }
    }
}

function sort(arr){
    const userid = (~~(document.getElementById('id').value));
    let table = document.createElement('table');
    table.id = "sortedTable";
    let rowHead = table.insertRow();
    for(key in arr[0]){
            rowHead.insertCell().innerHTML = key;
    }
    let check = 0;
    arr.forEach(item => {
        if(item["userId"] == userid){
            check = 1;
            let row = table.insertRow();
            for(const key in item){
                let cell =row.insertCell().innerHTML = item[key];
            }
        }
    });
    (check != 0)?document.body.appendChild(table):alert("invalid input");
}
