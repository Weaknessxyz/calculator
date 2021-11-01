let displayValue = '0';
let operand1 = null;
let operand2 = null;
let currOperator = null;

setDisplayValue();
setOperator();
placeDigit();
getResult();

function placeDigit() {
    const operands = document.querySelectorAll('.operand');
    operands.forEach(button => {
        button.addEventListener('click', e => {
            displayValue += e.target.textContent;
            setDisplayValue();
        });
    });
}

function setOperator() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(button => {
        button.addEventListener('click', e => {

            if (!operand1) {
                operand1 = Number(displayValue);
                displayValue = 0;
                setDisplayValue();
            } else {
                operand2 = Number(displayValue);
                operand1 = operate(currOperator, operand1, operand2);
                displayValue = operand1
                setDisplayValue();
                displayValue = 0;
            }

            currOperator = e.target.textContent;

            console.log(operand1);
            console.log(operand2);
            });
    });
}



function getResult() {
    const equals = document.querySelector('#equals');
    equals.addEventListener('click', e => {

        if (!operand1) {
            return
        } else {
            operand2 = Number(displayValue);
            displayValue = operate(currOperator, operand1, operand2);
            setDisplayValue();
        }
        
        operand1 = null;
        operand2 = null;
    });
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;;
        case '/':
            return divide(num1, num2);
    }
}

function setDisplayValue() {
    document.querySelector('.display-bar span').textContent = Number(displayValue);
}

