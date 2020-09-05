function getId() {
  let recievedId  = enteredId.value;
  return recievedId;
}

submit.addEventListener("click", sendRequest);

async function sendRequest(event) {
  let url = 'https://jsonplaceholder.typicode.com/todos/';
  let response = await fetch(url);
  if (response.ok) {
    let jsonDoc = await response.json();
    let enteredId = Number(getId());
    if (checkId(jsonDoc, enteredId)) {
       addFilteredTable(jsonDoc, enteredId);
    }
  } else {
    alert ('Sorry, something goes wrong, error: ' + response.status)
  }
}

function checkId(jsonDoc, enteredId) {
  for (index in jsonDoc) {
    let item = jsonDoc[index];
    if (item['userId'] === enteredId) {
      return true;
    } 
  }
  alert('Sorry, user with such id doesnt`t exist! Please, try again.');
}

function addFilteredTable(jsonDoc, enteredId) {
  const table = document.createElement('table');
  document.body.append(table);
  table.className = 'table'

  const row = document.createElement('tr');
  row.className = 'tableStyle'; 
  table.append(row);

  firstItem = jsonDoc[0];
  keysArray = [];
  for (key in firstItem) {
    keysArray.push(key);
    let tH = document.createElement('th');
    tH.className = 'head';
    tH.innerText = key;
    row.append(tH);
  }

  for (item1 in jsonDoc) {
    let item = jsonDoc[item1];
    if (item['userId'] === enteredId) {
      let row = document.createElement('tr');
      row.className = 'tableStyle'; 
      table.append(row);
      for (i in keysArray) {
        itemInArray = keysArray[i];
        let tD = document.createElement('td');
        tD.className = 'tableStyle';
        tD.innerText = item[itemInArray];
        row.append(tD);
      }
    } else {
      continue;
    }    
  }
}