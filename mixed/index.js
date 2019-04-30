const button = document.getElementById("button");
let id = document.getElementById("id");
let result = document.getElementById("result");
let obj;
let txt;
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/", false);
xhr.send();
if (xhr.status != 200) {
  alert(xhr.status + ": " + xhr.statusText);
} else {
  obj = JSON.parse(xhr.responseText);
}

id.oninput = function() {
  txt = id.value;
};

button.onclick = function() {
  let count = 0;
  for (let i = 0; i < obj.length; i++) {
    if (txt == obj[i].userId) {
      count++;
      const el = document.createElement("div");
      el.innerHTML = JSON.stringify(obj[i]);
      result.appendChild(el);
    }
  }
  if (count == 0) {
    alert("Такого ID нет в базе!");
  }
};
