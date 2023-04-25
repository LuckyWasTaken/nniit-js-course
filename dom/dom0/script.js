let dart_monkey = document.getElementById("dart_monkey");
dart_monkey.textContent =
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣰⣿⣿⣿⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⢼⡟⠉⣻⣿⣿⡏⠰⣷⠀⢹⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⢻⣷⡀⠙⣻⣿⣿⣄⣠⣴⡿⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⣭⣉⣛⣻⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⢠⠞⢡⣽⣿⣿⠿⢻⣿⣿⣿⣏⣿⣿⣿⣧⣤⣤⣤⣄⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠘⣴⡨⠛⠋⠁⠀⣼⣿⣿⣿⡟⣿⣿⣿⣿⣯⢈⣿⣿⠂⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⢀⣤⣿⣷⡜⣿⣧⡉⠉⠙⠋⠁⠈⠉⠁⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⢠⣾⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n";

function recolormonke(e) {
    dart_monkey.style.color = e.currentTarget.style.color;
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", recolormonke);
btn2.addEventListener("click", recolormonke);