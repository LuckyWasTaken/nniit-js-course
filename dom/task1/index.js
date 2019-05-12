const buttons = document.getElementsByClassName("butts");
Array.from(buttons).forEach(item => {
    item.addEventListener('click', (elem) => {changeColor(item.id)});
});

function changeColor(color){
    document.getElementById('block').style.color = color; 
}