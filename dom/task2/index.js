const result_field_element = document.getElementById('result-field');
const left_operand_element = document.getElementById('left-operand');
const right_operand_element = document.getElementById('right-operand');
const menu_element = document.getElementById('functions_menu');
left_operand_element.addEventListener("input", inputHandler);
right_operand_element.addEventListener("input", inputHandler);
menu_element.addEventListener("change", selectHandler);

function inputHandler(){
    performOperation(menu_element.options[menu_element.selectedIndex].value);
}

function selectHandler(){
    const menu = this.options[this.selectedIndex];
    performOperation(menu.value);
} 



function performOperation(action){
    if( action === '+'){
        result_field_element.innerHTML = Number(left_operand_element.value) + Number(right_operand_element.value);
    }
    if( action === '-'){
        result_field_element.innerHTML = left_operand_element.value - right_operand_element.value;
    }
    if( action === '*'){
        result_field_element.innerHTML = left_operand_element.value * right_operand_element.value;
    }
    if( action === '/'){
        if(Number(left_operand_element.value)  && Number(right_operand_element.value)){
            result_field_element.innerHTML = left_operand_element.value / right_operand_element.value;
        }else{
            result_field_element.innerHTML = 0;
        }   
    }
}