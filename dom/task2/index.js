const leftFormElement = document.getElementById("leftForm");
const rightFormElement = document.getElementById("rightForm");
const operatorElement = document.getElementById("operators");

function getAnswer() {
  const currentValue = operatorElement.value;
  let answerElement = document.getElementById("answer");
  if (currentValue === "sum") {
    answerElement.innerHTML =
      Number(leftFormElement.value) + Number(rightFormElement.value);
  }
  if (currentValue === "sub") {
    answerElement.innerHTML =
      Number(leftFormElement.value) - Number(rightFormElement.value);
  }
  if (currentValue === "mul") {
    answerElement.innerHTML =
      Number(leftFormElement.value) * Number(rightFormElement.value);
  }
  if (currentValue === "remainder") {
    answerElement.innerHTML =
      Number(leftFormElement.value) % Number(rightFormElement.value);
  }
  if (currentValue === "intDiv") {
    answerElement.innerHTML =
      (Number(leftFormElement.value) -
        (Number(leftFormElement.value) % Number(rightFormElement.value))) /
      Number(rightFormElement.value);
  }
  if (currentValue === "pow") {
    answerElement.innerHTML = Math.pow(
      Number(leftFormElement.value),
      Number(rightFormElement.value)
    );
  }
}

leftFormElement.oninput = getAnswer;
rightFormElement.oninput = getAnswer;
operatorElement.onchange = getAnswer;
