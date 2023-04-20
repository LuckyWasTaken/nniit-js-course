const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");
const textBlock = document.getElementById("text-block");

blueButton.addEventListener("click", () => {
    textBlock.style.color = "blue";
});

greenButton.addEventListener("click", () => {
    textBlock.style.color = "green";
});
