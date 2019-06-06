window.addEventListener('load', event => {
    const buttons = document.querySelectorAll('.btn');
    const divElem = document.querySelector('.box');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', event => {
            let computedStyle = getComputedStyle(buttons[i]);
            let backgroundElements = computedStyle.backgroundColor;
            divElem.style.backgroundColor = backgroundElements;
        });
    }

});