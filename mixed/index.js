document.getElementById('button_find').addEventListener("click", Make_Request);

function Make_Request(){
    const request  = new XMLHttpRequest();
    let data_array;
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    request.send();
    request.onreadystatechange = function(){
    data_array = JSON.parse(request.responseText);
    let prev_table = document.getElementById("table_data");
    if(prev_table){
		prev_table.parentNode.removeChild(prev_table);
    }
	Print_Table(data_array);
	}
}

function Print_Table(data_array){
    const UserID = Number((document.getElementById('text_userID').value));
    let table_data = document.createElement('table');
    table_data.id = "table_data";
    let head_table = table_data.insertRow();
    for(item in data_array[0]){
        head_table.insertCell().innerHTML = item;
    }
    data_array.forEach((Record) => {
        if(Record["userId"] == UserID){
            let Row = table_data.insertRow();
            for(const key in Record){
                let Cell = Row.insertCell().innerHTML = Record[key];
            }
        }
    });
    document.body.appendChild(table_data);
	return true
} 