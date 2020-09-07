function getInputVal(name) {
    const inFirst = document.getElementById(name)
    const allowed = /[0-9.]/
    let str = inFirst.value
    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(allowed))
            str = str.substr(0, i) + str.substr(i + 1, str.length)
    }
    inFirst.value = str
    let val = parseFloat(inFirst.value)
    if (isNaN(val)) {
        val = 0
    }
    return val
}
function onInput() {
    const operation = document.getElementById("operation").value;
    const valFirst = getInputVal("inFirst");
    const valSecond = getInputVal("inSecond");
    let result = 0
    switch (operation) {
        case '+':
            result = valFirst + valSecond
            break;
        case '-':
            result = valFirst - valSecond;
            break;
        case '*':
            result = valFirst * valSecond;
            break;
        case '/':
            result = valFirst / valSecond;
            break;
        case '^':
            result = Math.pow(valFirst, valSecond);
            break;
    }
    document.getElementById("result").innerHTML = result
}