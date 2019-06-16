const input=document.querySelector("input");
const button=document.querySelector("button");  
const ID=document.querySelector("getInfo");
button.addEventListener("click",makeTable);

function makeTable(){
    let inputValue=input.value;
    if(inputValue){
        fetch('https://jsonplaceholder.typicode.com/todos/',{method:'GET'})
        .then(function(response){
            if(response.ok){
                return response.json();
            }
            throw new Error("Произошла ошибка!");
        })
        .then(function(nodes){
            const table=document.createElement('table');
            for(i in nodes){
                if(nodes[i]["userId"]==inputValue){
                    const ID=document.createElement('div');
                    const title=document.createElement('div');
                    const completed=document.createElement('div');

                    ID.innerHTML=nodes[i]['id'];
                    title.innerHTML=nodes[i]['title'];
                    completed.innerHTML=nodes[i]['completed'];
                    
                    completed.style.marginBottom='15px'; 

                    table.appendChild(ID);
                    table.appendChild(title);
                    table.appendChild(completed); 
                }
            }
            document.body.appendChild(table);
        })
    }
}