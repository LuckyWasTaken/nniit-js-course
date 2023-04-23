var first = document.getElementById('first');
var sign = document.getElementById('sign');
var second = document.getElementById('second');
var out = document.getElementById('out');

function processor() {
    switch (sign.value[0]) {
        case '+':
            return +first.value + +second.value;
        case '-':
            return first.value - second.value;
        case '*':
            return first.value * second.value;
        case '/':
            return first.value / second.value;
        case '^':
            return Math.pow(first.value, second.value);
        case '%':
            return first.value % second.value;
        default:
            return undefined;
    }
}

first.addEventListener("input", function (event) {
    out.textContent = processor();
});

sign.addEventListener("change", function (event) {
    out.textContent = processor();
});

second.addEventListener("input", function (event) {
    out.textContent = processor();
});
