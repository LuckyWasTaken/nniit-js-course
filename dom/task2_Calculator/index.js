document.addEventListener("DOMContentLoaded", () => {
    const aInput = document.getElementById("aInput");
    const bInput = document.getElementById("bInput");
    const select = document.getElementById("select");
    const result = document.getElementById("result");

    const calculate = (a, b, act) => {
        if ((Number.isNaN(Number.parseFloat(a)) && a != "") || (Number.isNaN(Number.parseFloat(b)) && b != "")){
            return "Некоррек. число";
        }
        if (a == "" || b == "" || act == "" ){
            return "";
        }
        if (act == "/" && b == "0"){
            return "Деление на ноль";
        }
        
        switch (act){
            case "+":
                return Number.parseFloat(a) + Number.parseFloat(b);
            case "-":
                return Number.parseFloat(a) - Number.parseFloat(b);
            case "*":
                return Number.parseFloat(a) * Number.parseFloat(b);
            case "/":
                return Number.parseFloat(a) / Number.parseFloat(b);
            default:
                return "";
        }
    };

    aInput.oninput = bInput.oninput = select.onchange = () => {result.innerHTML = calculate(aInput.value,bInput.value, select.value)};
    
})