let advert = document.getElementById("advert");
let advert2 = document.getElementById("advert2");
advert.onclick = onClick;
advert2.onclick = onClick2;

function onClick() {

    document.documentElement.style.color = "blue";
}

function onClick2() {
    document.documentElement.style.color = "red";

}