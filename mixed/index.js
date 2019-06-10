const button=document.querySelector('button');
const input=document.querySelector('input');
const ID=document.getElementById('getInformation');
button.addEventListener('click',makeTable);


function makeTable()
{
let inputValue=input.value;
  if(inputValue)
  {

    fetch('https://jsonplaceholder.typicode.com/todos/',{method:'GET'})

    .then(function(response) 
    {
      if(response.ok) 
      {
        return response.json();
      }
      throw new Error('Error!');
    })

    .then(function(nodes) 
    {                                            
      
      const oldContainer=document.getElementsByTagName('container')[0];
      if (oldContainer) document.body.removeChild(oldContainer);
      const container=document.createElement('container');

      for(i in nodes)
      {                                                      
        if(nodes[i]["userId"]==inputValue)
        {
          const IDdiv=document.createElement('div');
          const titlediv=document.createElement('div');
          const completeddiv=document.createElement('div');

          IDdiv.innerHTML=nodes[i]['id'];
          titlediv.innerHTML=nodes[i]['title'];
          completeddiv.innerHTML=nodes[i]['completed'];

          completeddiv.style.marginBottom='20px';

          container.appendChild(IDdiv);
          container.appendChild(titlediv);
          container.appendChild(completeddiv);
        };
      }
      document.body.appendChild(container);
    })
  }
}
