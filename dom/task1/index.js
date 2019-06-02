const button_elements = document.getElementsByClassName("сolor-switch-button");
const text_block_element = document.getElementById('text-block');
Array.from(button_elements).forEach(item => {
    item.addEventListener('click', (elem) => {changeColor(item.id)});
});

function changeColor(color){
    text_block_element.style.color = color;
}