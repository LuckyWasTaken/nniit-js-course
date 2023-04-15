function setColor(){
    var newColor = colors.get(this.id);
    document.getElementById('text').style.color = newColor;
}

var colors = new Map();
colors.set('redButton', '#ff0000');
colors.set('blueButton', '#0000ff');

for (const buttonName of colors.keys()) {
    document.getElementById(buttonName).onclick = setColor;
}
