function getInfo() {
  const id = parseInt(document.getElementById("id").value);

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let dataFiltredByUserId = data.filter(function(object) {
        return object["userId"] === id;
      });

      for (let i = 0; i < dataFiltredByUserId.length; i++) {
        let newLi = document.createElement("li");
        let string = "";

        keys = Object.keys(dataFiltredByUserId[i]);
        for (let j = 0; j < keys.length; j++) {
          string += keys[j] + ": " + dataFiltredByUserId[i][keys[j]] + "<br>";
        }
        // Создание строки перед выводом ее на страничку у меня выглядит как-то колхозно.
        // Но по-другому у меня не получилось. Если пробовать объект приводить в текстовый вид через toString(),
        // то выводит на страницу [Object object].
        // Пробовал через (JSON.parse(объект)).toString() - вообще не работает.

        newLi.innerHTML = string;
        list.appendChild(newLi);
      }

      console.log("Finished successfully!");
    })
    .catch(function() {
      console.log("Error!");
    });
  // Без блока .catch почему-то вообще не входит в fetch. Ну или я что-то делаю не так =)
}

