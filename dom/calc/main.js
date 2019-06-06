window.addEventListener('load', event => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const operator = document.getElementById('operators');
    const button = document.getElementById('calc');
    const result = document.getElementById('result');

    button.addEventListener('click', event => {
        let num1 = +input1.value;
        let num2 = +input2.value;
        let answer = '';
        switch(operator.value) {
            case 'sum':
                answer = num1 + num2;
                break;
            case 'sub':
                answer = num1 - num2;
                break;
            case 'mul':
                answer = num1 * num2;
                break;
            case 'div':
                if (num2 == 0) {
                    answer = 'Error';
                }else {
                    answer = num1 / num2;
                    break;
                }
                
        }
        result.innerHTML = answer;
    });
});



