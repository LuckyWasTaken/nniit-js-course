let btn_coral = document.querySelector("#coral");
let btn_blue = document.querySelector("#blue");
let btn_green = document.querySelector("#green");

btn_coral.onclick = function() {
	document.getElementById("text").style = "color: #c97874";
}

btn_blue.onclick = function() {
	document.getElementById("text").style = "color: #6cacc5";
}

btn_green.onclick = function() {
	document.getElementById("text").style = "color: #6cc588";
}