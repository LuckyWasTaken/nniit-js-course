const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const text = document.getElementById("text");

color1.onclick = color1Click;
color2.onclick = color2Click;



function color1Click(){
    text.style.setProperty('--text-color', 'green');
    setTimeout(function(){
        text.style.setProperty('--text-color', 'dimgrey');
    }, 3000);


}

function color2Click() {
    text.style.setProperty('--text-color', 'red');
    setTimeout(function(){
        text.style.setProperty('--text-color', 'dimgrey');
    }, 3000);
}