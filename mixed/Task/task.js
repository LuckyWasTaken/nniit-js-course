function makeRequest() {
  const userID = parseInt(document.getElementById("id").value);
  let totalresult;

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(json => {
      totalresult = json.filter(object => object["userId"] === userID);
      showResult(totalresult);
    })
    .catch(function(ex) {
      console.log("parsing failed", ex);
    });
}

function showResult(totalresult) {
  const table = document.getElementById("table");
  table.innerHTML = "";
  if (totalresult.length === 0) {
    const str = document.createElement("p");
    str.innerText = "You entered incorrect ID";
    table.appendChild(str);
  }
  totalresult.forEach(element => {
    const num = document.createElement("p");
    table.appendChild(num);
    for (let key in element) {
      const el = document.createElement("p");
      el.innerHTML = `${key}: ${element[key]}`;
      table.appendChild(el);
    }
    const el = document.createElement("p");
    el.innerHTML =
      "--------------------------------------------------------------------------------------";
    table.appendChild(el);
  });
}
