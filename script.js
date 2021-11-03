let displayValue = '0';
let operand1 = null;
let operand2 = null;
let currOperator = null;

start();

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'ERROR'
            } else return Math.round(num1 / num2 * 100000) / 100000;
    }
}

function setDisplayValue() {
    if (displayValue === 'ERROR' || isNaN(displayValue)) {
        document.querySelector('.display-bar span').textContent = 'ERROR';
        clearAll();
        
    } else {
        document.querySelector('.display-bar span').textContent = Number(displayValue);
    }
}

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
                currOperator = e.target.textContent;
            } else {
                operand2 = Number(displayValue);
                operand1 = operate(currOperator, operand1, operand2);
                displayValue = operand1
                setDisplayValue();
                displayValue = 0;
                currOperator = e.target.textContent;
            }
            });
    });
}

function clearAll() {
    displayValue = 0;
    operand1 = null;
    operand2 = null;
    currOperator = null;
}

function clearAllBtn() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', () => {
        clearAll();
        setDisplayValue();
    });
}

function delDigit() {
    const delBtn = document.querySelector('#backspace');
    delBtn.addEventListener('click', () => {
        displayValue = displayValue.toString().slice(0, -1);
        setDisplayValue();
    });
}

function getResult() {
    const equalsBtn = document.querySelector('#equals');
    equalsBtn.addEventListener('click', () => {

        if (!operand1) {
            return
        } else {
            operand2 = Number(displayValue);
            displayValue = operate(currOperator, operand1, operand2);
            setDisplayValue();
            operand1 = null;
            operand2 = null;
        }
    });
}

function start() {
    setDisplayValue();
    setOperator();
    placeDigit();
    getResult();
    clearAllBtn();
    delDigit();
}
