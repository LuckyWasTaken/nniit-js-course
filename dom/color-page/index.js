const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const colorBlock = document.getElementById("color-block");

redBtn.addEventListener("click", () => {
    colorBlock.style.color = "red";
});

blueBtn.addEventListener("click", () => {
    colorBlock.style.color = "blue";
});
