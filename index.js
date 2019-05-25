function getTitle() {
    const userID = parseInt(document.getElementById("userID").value);
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
    document.getElementById("list").innerHTML = "";
    if (totalresult.length === 0) {
      const str = document.createElement("p");
      str.innerText = "You entered incorrect ID";
      list.appendChild(str);
    }
    totalresult.forEach(element => {
      const num = document.createElement("li");
      list.appendChild(num);
      for (let key in element) {
        const el = document.createElement("p");
        el.innerHTML = `${key}: ${element[key]}`;
        list.appendChild(el);
      }
    });
  }