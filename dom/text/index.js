const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const textBlock = document.getElementById("textBlock");

redButton.addEventListener("click", () => {
    textBlock.style.color = "red";
});

greenButton.addEventListener("click", () => {
    textBlock.style.color = "green";
});
