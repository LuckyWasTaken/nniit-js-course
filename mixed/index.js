function search()

{
    let select = document.getElementById("input").value;
	let request = new XMLHttpRequest();

    request.onload = function() 
{
	
    if (request.status == 200) 
	
	{
			let collection = JSON.parse(request.responseText);

            let filtered = collection.filter(function (numb) 
		{
            return numb.id == select;
        });
            document.getElementById("result").value = JSON.stringify(filtered[0]);

    } else 
		
		{
            alert(request.status + ': ' + request.statusText);
        }
};

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

    request.send();

    return false;
}