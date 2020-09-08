function insert (num) {
	document.form.textview.value += num;
}

function clean () {
	document.form.textview.value = "";
}

function egual () {
	let exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}
}


let t = document.getElementById("time");



function clocks() {
	let time = new Date();
	let h = time.getHours().toString();
	let m = time.getMinutes().toString();

	if(h.length<2){h = '0' + h;}
	if(m.length<2){m = '0' + m;}

	let resTime = h + ":" + m;
	t.textContent = resTime;
}

setInterval(clocks, 1000);
