const buttonRed = document.getElementById("button-red");
const buttonBlack = document.getElementById("button-black");
const textBlock = document.getElementById("text-block");

buttonRed.addEventListener("click", () => {
    textBlock.style.color = "red";
});

buttonBlack.addEventListener("click", () => {
    textBlock.style.color = "black";
});