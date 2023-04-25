const btnGreen = document.getElementById("btnGreen");
const btnBlue = document.getElementById("btnBlue");
const textBlock = document.getElementById("text-block");

textBlock.style.color = "green"

btnGreen.addEventListener(
	"click",
	() => { textBlock.style.color = "green"; })

btnBlue.addEventListener(
	"click",
	() => { textBlock.style.color = "blue"; })
