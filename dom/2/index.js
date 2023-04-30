function calculate() {
    let a = parseInt(document.getElementById("first-number").value)
    let b = parseInt(document.getElementById("second-number").value)
    let operation = document.getElementById("operation-select").value

    document.getElementById("result").innerHTML = eval(`${a} ${operation} ${b}`)
}