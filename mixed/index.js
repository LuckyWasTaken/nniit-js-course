function getInfo() {
  const id = parseInt(document.getElementById("id").value);

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => {
      let dataFiltredByUserId = data.filter(function(object) {
        return object["userId"] === id;
      });

      renderHtmlList(dataFiltredByUserId);

      console.log("Finished successfully!");
    })
    .catch(() => {
      console.log("Error!");
    });
}

function renderHtmlList(dataFiltredByUserId) {
  dataFiltredByUserId.forEach((item, i, data) => {
    let newLi = document.createElement("li");
    let string = "";

    keys = Object.keys(item);

    newLi.innerHTML = keys.reduce((string, currentKey, index, keys) => {
      return (string += `${currentKey}: ${item[currentKey]}<br>`);
    }, "");
    list.appendChild(newLi);
  });
}
