document.getElementById('funcs').addEventListener("change", selectHandler);
document.getElementById('leftOper').addEventListener("input", inputHandler);
document.getElementById('rightOper').addEventListener("input", inputHandler);

function inputHandler(){
    const s = document.getElementById('funcs');
    actions(s.options[s.selectedIndex].value);
}

function selectHandler(){
    const a = this.options[this.selectedIndex];
    actions(a.value);
} 



function actions(action){
    if( action == '+'){
        document.getElementById('result').innerHTML = (+document.getElementById('leftOper').value)
        +(+document.getElementById('rightOper').value);
    }
    if( action == '-'){
        document.getElementById('result').innerHTML = document.getElementById('leftOper').value
        -document.getElementById('rightOper').value;
    }
    if( action == '*'){
        document.getElementById('result').innerHTML = document.getElementById('leftOper').value
        *document.getElementById('rightOper').value;
    }
    if( action == '/'){
        document.getElementById('result').innerHTML = document.getElementById('leftOper').value
        /document.getElementById('rightOper').value;
    }
}