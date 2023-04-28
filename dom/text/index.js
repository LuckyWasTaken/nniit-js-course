const text = document.getElementById("text");
let text_color_changed = "black";
const cat = document.getElementById('cat');
let cat_rotation_degrees = 0;
const blue_button = document.getElementById("color-button-blue");
const pink_button = document.getElementById("color-button-pink");

blue_button.addEventListener("click", () => {
    if (text_color_changed === "blue") {
        text.style.color = "black";
        blue_button. /* why is it called */ innerHTML = "Blueish"
        blue_button.style.background = "#87CEEB";
        pink_button.innerHTML = "Pinkee"
        pink_button.style.background = "pink";
        text_color_changed = "black";
        /* cat.style.transform = 'rotate(90deg)'; //Видимо одноразовая акция */
        cat_rotation_degrees = (cat_rotation_degrees + 45) % 360;
    } else if (text_color_changed === "pink") {
        text.style.color = "#87CEEB";
        blue_button.innerHTML = "Get <s>black</s> back"
        blue_button.style.background = "black";
        pink_button.innerHTML = "Pinkee"
        pink_button.style.background = "pink";
        text_color_changed = "blue";
        cat_rotation_degrees = (cat_rotation_degrees + 45) % 360;
    } else {
        text.style.color = "#87CEEB";
        blue_button.innerHTML = "Get <s>black</s> back"
        blue_button.style.background = "black";
        pink_button.innerHTML = "Pinkee"
        pink_button.style.background = "pink";
        text_color_changed = "blue";
        cat_rotation_degrees = (cat_rotation_degrees + 45) % 360;
    }
    cat.style.transform = `rotate(${cat_rotation_degrees}deg)`;
});

pink_button.addEventListener("click", () => {
    if (text_color_changed === "pink") {
        text.style.color = "black";
        pink_button.innerHTML = "Pinkee"
        pink_button.style.background = "pink";
        blue_button.innerHTML = "Blueish"
        blue_button.style.background = "#87CEEB";
        text_color_changed = "black";
        cat_rotation_degrees = (cat_rotation_degrees - 45) % 360;
    } else if (text_color_changed === "blue") {
        text.style.color = "pink";
        pink_button.innerHTML = "Get <s>black</s> back"
        pink_button.style.background = "black";
        blue_button.innerHTML = "Blueish"
        blue_button.style.background = "#87CEEB";
        text_color_changed = "pink";
        cat_rotation_degrees = (cat_rotation_degrees - 45) % 360;
    } else {
        text.style.color = "pink";
        pink_button.innerHTML = "Get <s>black</s> back"
        pink_button.style.background = "black";
        blue_button.innerHTML = "Blueish"
        blue_button.style.background = "#87CEEB";
        text_color_changed = "pink";
        cat_rotation_degrees = (cat_rotation_degrees - 45) % 360;
    }
    cat.style.transform = `rotate(${cat_rotation_degrees}deg)`;
});