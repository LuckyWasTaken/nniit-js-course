const textBlue = document.getElementById("textBlue");
const textDarkBlue = document.getElementById("textDarkBlue");
const text = document.getElementById("text");

text.style.color = "#4682B4"

textBlue.addEventListener(
	"click",
	() => { text.style.color = "#4682B4"; })

textDarkBlue.addEventListener(
	"click",
	() => { text.style.color = "#191970"; })