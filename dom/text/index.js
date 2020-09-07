function RedBtnClick(){
    let text = document.getElementById("text")
    text.style.color = "#f00"
}
function YellowBtnClick(){
    let text = document.getElementById("text")
    text.style.color = "#FFFF00"
}

let RedButton  = document.getElementById("RedButton")
RedButton .addEventListener("click", RedBtnClick)

let YellowButton  = document.getElementById("YellowButton")
YellowButton .addEventListener("click", YellowBtnClick)

