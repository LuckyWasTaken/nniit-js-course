function calculate()
 {
    let cell1 = parseInt(document.getElementById("cell1").value);
    let cell2 = parseInt(document.getElementById("cell2").value);
    let action = document.getElementById("action");
    let answer = document.getElementById("answer");
    switch (action.value)
    {
        case "+": 
            answer.innerHTML = cell1 + cell2;
            break;
        case "-": 
            answer.innerHTML = cell1 - cell2;
            break;
        case "*": 
            answer.innerHTML = cell1 * cell2;
            break;
        case "/": 
            answer.innerHTML = cell1 / cell2;
            break;
        case "^": 
            answer.innerHTML = cell1 ** cell2;
            break;
        case "%": 
            answer.innerHTML = cell1 % cell2;
            break;
     }
}