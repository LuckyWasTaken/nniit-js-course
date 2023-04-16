let red_btn = document.getElementById('red_btn')
let green_btn = document.getElementById('green_btn')
let text = document.getElementById('text')


function eventHndler(event){
    text.style.color = event.currentTarget.style.color
}

red_btn.addEventListener("click", eventHndler)
green_btn.addEventListener("click", eventHndler)