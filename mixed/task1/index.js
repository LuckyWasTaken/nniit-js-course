function clickOnButton()
{
    
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", false);
    request.send(); 
    if(request.status != 200)
    return;
    var userId = document.getElementById("userId").value;
    var table2 = document.getElementById("table"); 
    var table = "";
    var mas = request.response;    
    
    table += "<table border = 2>" ;
    i=0;
    mas = mas.split(" ");
    while(i<mas.length)
    {

        if(mas[i] == "\"userId\":")
        {
            if(parseInt(mas[i+1]) == +userId)
            {
                table += "<tr>";
                while(true)
                {
                    if(mas[i] == "\"id\":")
                    {
                        table += "<td>"+parseInt(mas[i+1])+"</td>";
                    }
                    else if(mas[i] == "\"title\":")
                    { 
                        table += "<td>";
                        while(true)
                        {                        
                        if(mas[i+1][mas[i+1].length-2] == ","){
                            table += mas[i+1].slice(0,-2);
                        break;
                        }
                        table += mas[i+1]+ " ";
                        i++;
                        }
                        table += "</td>";
                    }
                    else if(mas[i] == "\"completed\":")
                    {
                        table += "<td>"+mas[i+1]+"</td>";
                        break;
                    }
                    i++;
                }

                table += "</tr>";
            }
        }
        i++;
    }
  table += "</table>";
  table2.innerHTML = table;
}