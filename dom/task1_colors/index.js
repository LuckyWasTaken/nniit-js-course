function setColor(){
    var newColor = map.get(this.id);
    document.getElementById('text').style.color = newColor;
}

var map = new Map();
map.set('redButton', '#ff0000');
map.set('blueButton', '#0000ff');
document.getElementById('redButton').onclick = setColor;
document.getElementById('blueButton').onclick = setColor;
