function search(){
    let choose = document.getElementById("field").value;
    let request = new XMLHttpRequest();
    
    request.onload = function() {
        if (request.status == 200) {
            let collection = JSON.parse(request.responseText);
           
            let filtered = collection.filter(function (item) {
                return item.id == choose;
            });

            document.getElementById("result").value = JSON.stringify(filtered[0]);
        
        } else {
            console.log("Error");
        }
    };

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    
    request.send();

    return false;
}