function procRequest()
{
    
    const ID = document.getElementById("inID").value;
    const request = new XMLHttpRequest();

    //alert(ID);

    let Table  = document.getElementById("con");

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
    request.send();

    let answers = JSON.parse(request.response);

    Table.innerHTML = "<table id = 'mainTable'> </table>";
    Table = document.getElementById("mainTable");
    Table.innerHTML += '<tr><td>user ID</td><td>ID</td><td>Title</td><td>Completed</td></tr>'


    answers.forEach(element => 
    {
    
        if(element.userId == ID)
        {
            Table.innerHTML +='<tr><td>' + element.userId + '</td><td>' + element.id + '</td><td>' 
            + element.title + '</td><td>' + element.completed + '</td></tr>';
        }

    });
} 
