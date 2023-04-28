const calc_screen = document.getElementById("calc-screen");

/* Actions */
const calc_button_add = document.getElementById("calc-button-add");
const calc_button_sub = document.getElementById("calc-button-sub");
const calc_button_mlt = document.getElementById("calc-button-mlt");
const calc_button_div = document.getElementById("calc-button-div");
const calc_button_clear = document.getElementById("calc-button-CE");
const calc_button_switch = document.getElementById("calc-button-switch");
const calc_button_cat = document.getElementById("calc-button-cat");

/* Digits */
const calc_button_1 = document.getElementById("calc-button-1");
const calc_button_2 = document.getElementById("calc-button-2");
const calc_button_3 = document.getElementById("calc-button-3");
const calc_button_4 = document.getElementById("calc-button-4");
const calc_button_5 = document.getElementById("calc-button-5");
const calc_button_6 = document.getElementById("calc-button-6");
const calc_button_7 = document.getElementById("calc-button-7");
const calc_button_8 = document.getElementById("calc-button-8");
const calc_button_9 = document.getElementById("calc-button-9");

var left = "";
var operand = "";
var right = "";
var result = "";
var end = false;

/*calc_screen.addEventListener('keypress', function (e) {
    const key = e.which || e.keyCode;
    /*
    "+": 187, 107 
    "-": 189, 109
    "*": 56, 106
    "x": 88
    "/": 191, 111
    ":": 186
    */
/*
    if (key != 187 && key != 107 && key != 189 && key != 109 && key != 56 && key != 106 && key != 88 && key != 191 && key != 111 && key != 186 && key != 49 && key != 50 && key != 51 && key != 52 && key != 53 && key != 54 && key != 55 && key != 56 && key != 57) {
        e.preventDefault();
    }
});*/

/* Actions */
calc_button_add.addEventListener("click", () => {
    calc_screen.value = calc_screen.value + "+";
    operand = "+";
});
calc_button_sub.addEventListener("click", () => {
    calc_screen.value = calc_screen.value + "-";
    operand = "-";
});
calc_button_mlt.addEventListener("click", () => {
    calc_screen.value = calc_screen.value + "*";
    operand = "*";
});
calc_button_div.addEventListener("click", () => {
    calc_screen.value = calc_screen.value + "/";
    operand = "/";
});
calc_button_clear.addEventListener("click", clearScreen);

function clearScreen() {
    left = "";
    right = "";
    operand = "";
    result = "";
    calc_screen.value = "";
}

calc_button_switch.addEventListener("click", () => {
    window.alert("Not implemented.");
});
calc_button_cat.addEventListener("click", () => {
    window.alert("  \u2606    \u2606  \u2606\r\n\u2508\u2508\u2508\u2508 \u256D\u2501\u2501\u2501\u2501\u2501\u2501\u256E  \u2606\r\n\u2508\u2606 \u2508\u2508\u2503\u2573\u2573\u2573\u2595\u2572\u2582\u2582\u2571\u258F\r\n\u2508\u2508\u2606 \u2508\u2503\u2573\u2573\u2573\u2595\u258F\u258D\u2595\u258D\u258F\r\n\u2508\u2508 \u2570\u2501\u252B\u2573\u2573\u2573\u2595\u258F\u2570\u253B\u256F\u258F\r\n\u2606 \u2508\u2508\u2508\u2503\u2573\u2573\u2573\u2573\u2572\u2582\u2582\u2571\r\n            \u2606 \u2570\u2533\u2533\u2501\u2501\u2533\u2533\u256F   \u2606");
});

/* Digits */
calc_button_1.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "1";
    if (operand === "") {
        left = left + "1";
    } else {
        right = right + "1";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_2.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "2";
    if (operand === "") {
        left = left + "2";
    } else {
        right = right + "2";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_3.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "3";
    if (operand === "") {
        left = left + "3";
    } else {
        right = right + "3";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_4.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "4";
    if (operand === "") {
        left = left + "4";
    } else {
        right = right + "4";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_5.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "5";
    if (operand === "") {
        left = left + "5";
    } else {
        right = right + "5";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_6.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "6";
    if (operand === "") {
        left = left + "6";
    } else {
        right = right + "6";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_7.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "7";
    if (operand === "") {
        left = left + "7";
    } else {
        right = right + "7";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_8.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "8";
    if (operand === "") {
        left = left + "8";
    } else {
        right = right + "8";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});
calc_button_9.addEventListener("click", () => {
    if (end) {
        clearScreen();
        end = false;
    }
    calc_screen.value = calc_screen.value + "9";
    if (operand === "") {
        left = left + "9";
    } else {
        right = right + "9";
        switch (operand) {
            case "+":
                result = parseInt(left) + parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "-":
                result = parseInt(left) - parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "*":
                result = parseInt(left) * parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
            case "/":
                result = parseInt(left) / parseInt(right);
                calc_screen.value = calc_screen.value + "=" + result;
                end = true;
                break;
        }
    }
});