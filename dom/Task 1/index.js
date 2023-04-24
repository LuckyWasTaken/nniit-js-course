function SetTextColor(buttonId) {
    document.getElementById("src-text").style.color = document.getElementById(buttonId).style.background;
	//alert("Da");
}

function RandButtonColor(buttonId) {
	let letters = '0123456789abcdef';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	document.getElementById(buttonId).style.background = color;
}