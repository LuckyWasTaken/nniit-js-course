let blue_btn = document.getElementById("blue_btn");
let purple_btn = document.getElementById("purple_btn");
let text = document.getElementById("text");

function eventHndler(event) {
  text.style.color = event.currentTarget.style.color;
}

blue_btn.addEventListener("click", eventHndler);
purple_btn.addEventListener("click", eventHndler);
