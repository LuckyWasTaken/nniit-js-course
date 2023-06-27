const to_pink_btn = document.getElementById("to_pink_btn");
const to_green_btn = document.getElementById("to_green_btn");
const text = document.getElementById("text");

to_pink_btn.addEventListener('click', function() {
  text.style.color = '#DA1B99'
});

to_green_btn.addEventListener('click', function() {
  text.style.color = '#2D5D32'
});