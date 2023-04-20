const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const textBlock = document.querySelector("#textBlock");

redBtn.addEventListener("click", () => {
  textBlock.style.color = "red";
});

greenBtn.addEventListener("click", () => {
  textBlock.style.color = "green";
});
