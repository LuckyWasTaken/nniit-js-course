const redButton = document.getElementById("redButton");
const grayButton = document.getElementById("grayButton");
const textBlock = document.getElementById("textBlock");

redButton.addEventListener("click", () => {
    textBlock.style.color = "red";
});

grayButton.addEventListener("click", () => {
    textBlock.style.color = "gray";
});