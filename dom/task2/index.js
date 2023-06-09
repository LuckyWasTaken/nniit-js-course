function calculate() {
    const fstNum = document.getElementById("fstNum").value
    const operator = document.getElementById("operator").value
    const sndNum = document.getElementById("sndNum").value
    const result = document.getElementById("result")
    
    switch (operator) {
    case "+":
    result.textContent = Number(fstNum) + Number(sndNumb)
    break
    case "-":
    result.textContent = Number(fstNumb) - Number(sndNum)
    break
    case "*":
    result.textContent = Number(fstNum) * Number(sndNum)
    break
    case "/":
    if (Number(sndNum) != 0) {
    result.textContent = Number(fstNum) / Number(sndNum)
    }
    else {
    alert('Не умею делить на 0 :(')
    }
    break
    }
    }