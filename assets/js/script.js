document.addEventListener('DOMContentLoaded', function() {
function add(a,b){
    return a + b;
}
function substract(a,b){
    return a - b ;

}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result;
    switch(operator){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = substract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        default:
            result = 'Invalid operator';
    }
    document.getElementById('result').innerText = 'Result: ' + result;
}

function initCalculator(){
    const numericButtons = document.querySelector('.numeric-pad');
    const operatorButtons = document.querySelectorAll('.operator-pad');
    for (let i = 9; i >= 0 ; i--){
        const button = document.createElement('button');

        //button.classList.add('numeric-pad');
        button.type = 'button';
        button.value = i;
        button.innerText = i;
        numericButtons.appendChild(button);
    }}


initCalculator();


});