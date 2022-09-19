const display_value = document.querySelector('#display');
const mini_display = document.querySelector('#op-display');
const operandBtns = document.querySelectorAll('.operand');
const operatorBtns = document.querySelectorAll('.operator');

const addBtn = document.querySelector('#addition');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equals');


const clearBtn = document.querySelector('#clear');


// Populate Display
for(let i = 0; i < operandBtns.length; i++) {
    operandBtns[i].addEventListener('click', function() {
        if(display_value.textContent == 0 || op_registered === 1) {
            display_value.textContent = operandBtns[i].textContent;
            op_registered = 0;
        }

        else {
            display_value.textContent += operandBtns[i].textContent; // for value use attribute in HTML
        }
    });
}

// Utility Function to reset Operands after an operation/clear
function resetOperands(){
    firstOperand = 0;
    secondOperand = 0;
    result = 0;
}

// Clear Display
clearBtn.onclick = () => {display_value.textContent = 0; mini_display.textContent = ''; resetOperands()};

let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let op_registered = 0;
let operator = null;


for(let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].onclick = () => {
        operator = operatorBtns[i].value;
        console.log(operator + " was registered"); // get the operator of the button that was clicked'
        op_registered = 1;

        firstOperand = Number(display_value.textContent);
        let currentFirst= firstOperand;
        console.log(firstOperand + " holds firstOperand");

        mini_display.textContent = `${currentFirst} ${operator}`;
        display_value.textContent = currentFirst;        
    }
}


equalBtn.onclick = () => {
    if(operator === null) {
        console.log("You suck at math, buddy.");
    }

    else {
        secondOperand = Number(display_value.textContent);
        console.log(firstOperand + " holds firstOperand");
        console.log(secondOperand + " holds secondOperand");

        result = operate(operator, firstOperand, secondOperand);
        mini_display.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
        display_value.textContent = result;
    }
    
}

// Calculator Functions
const add = function(operand1, operand2) {
    return Number(operand1 + operand2);
}

const subtract = function (operand1, operand2) {
    return operand1 - operand2;
}

const multiply = function (operand1, operand2) {
    return operand1 * operand2;
}


const divide = function (operand1, operand2) {
    return operand1 / operand2;
}

// Operate Function
function operate(operator, op1, op2) {
    if(operator === '+') {
        return add(op1, op2);
    }

    if(operator === '-') {
        return subtract(op1, op2);
    }

    if(operator === '*') {
        return multiply(op1, op2);
    }

    if (operator === '/') {
        return divide(op1, op2);
    }
}

// console.log(operate(add, 2, 5));