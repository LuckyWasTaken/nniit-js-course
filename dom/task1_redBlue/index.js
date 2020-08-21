document.addEventListener("DOMContentLoaded", () => {

    const text = document.getElementById("text");

    const setButton = (button, element, color) => {

        const setElementColor = (element,color) => {
            element.style.color = color;
        }

        button.addEventListener("click", () => {
            setElementColor(element,color);
        });
    }

    const redButton = document.getElementById("redButton");
    setButton(redButton,text,"red");
    const blueButton = document.getElementById("blueButton");
    setButton(blueButton,text,"blue");
})

