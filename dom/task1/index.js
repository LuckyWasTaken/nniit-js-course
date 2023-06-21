const text = document.getElementById("text");
const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");

firstButton.addEventListener(
	"click",
	() => { text.style.color = "red"; })

secondButton.addEventListener(
	"click",
	() => { text.style.color = "blue"; })