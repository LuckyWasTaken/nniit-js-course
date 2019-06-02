document.getElementById('get-button').addEventListener("click", makeRequest);

function makeRequest(){
    const request  = new XMLHttpRequest();
    let data_array;
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState !== 4) {
            return;
        }
        if (request.status !== 200){
            alert(request.status + ": " + request.statusText);
        }else{
               try{
                   data_array = JSON.parse(request.responseText);
               }catch(exception){
                   alert(exception.message)
               }
               let previous_table = document.getElementById("sorted-table");
               if(previous_table){
                   previous_table.parentNode.removeChild(t);
                   sort(data_array);
               }else{sort(data_array);}
        }
    }
}

function sort(arr){
    const userid = Number((document.getElementById('entered-id').value));
    let table = document.createElement('table');
    table.id = "sorted-table";
    let row_head = table.insertRow();
    for(key in arr[0]){
            row_head.insertCell().innerHTML = key;
    }
    let check_id = 0;
    arr.forEach(item => {
        if(item["userId"] == userid){
            check_id = 1;
            let row = table.insertRow();
            for(const key in item){
                let cell =row.insertCell().innerHTML = item[key];
            }
        }
    });
    (check_id != 0)?document.body.appendChild(table):alert("invalid input");
}
