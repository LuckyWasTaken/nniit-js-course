function calc(){

    let num1 = Number(document.getElementById("inp1").value)
    let num2 = Number(document.getElementById("inp2").value)
    let select = document.getElementById("sel").value

    if (select === '+') {
        document.getElementById("result").innerHTML = num1+num2
    } else if (select ===  '-') {
        document.getElementById("result").innerHTML = num1-num2
    } else if (select ===  '/') {
        document.getElementById("result").innerHTML = num1/num2
    } else if (select === '*'){
        document.getElementById("result").innerHTML = num1*num2
    }
}