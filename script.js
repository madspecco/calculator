const display_value = document.querySelector('#display');
const mini_display = document.querySelector('#op-display');
const operandBtns = document.querySelectorAll('.operand');
const operatorBtns = document.querySelectorAll('.operator');


const decimalBtn = document.querySelector('#decimal');
const addBtn = document.querySelector('#addition');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const signBtn = document.querySelector('#sign');


let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let computed = 0;
let op_registered = 0;
let operator = null;

/* Utility Functions */

// Decimal Button
decimalBtn.onclick = () => {
    decimalBtn.disabled = true;
};

// Clear Display
clearBtn.onclick = () => {
    display_value.textContent = 0;
    mini_display.textContent = '';
    operator = null;
    resetOperands();
    enableBtns();
    decimalBtn.disabled = false;
};


// Utility Function that does the same as clicking the Clear Button
function restart() {
    display_value.textContent = 0;
    mini_display.textContent = '';
    operator = null;
    resetOperands();
    enableBtns();
}


// Utility Function to disable/enable buttons
function enableBtns() {
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
}

function disableBtns() {
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
}


// Utility Function to reset Operands after an operation/clear
function resetOperands(){
    firstOperand = 0;
    secondOperand = 0;
    result = 0;
}


/* Core Functionality */

// Populate Display
operandBtns.onclick = populateDisplay();

function populateDisplay() {
    for(let i = 0; i < operandBtns.length; i++) {
        operandBtns[i].addEventListener('click', function() {

            if(display_value.textContent.length > 7) {
                display_value.textContent = display_value.textContent.substring(0, 7);
            }

            if(operator === '/' && operandBtns[i].textContent === '0') {
                alert('Did you just try to divide by 0?🤨🤨🤨');
                alert("Don't worry, I gotchu.");
                restart();
            }
    
            if(firstOperand !== 0) {
                disableBtns();
            }
    
            if(display_value.textContent == 0 || op_registered === 1 || computed === 1) {
                display_value.textContent = operandBtns[i].textContent;
                op_registered = 0;
                computed = 0;
            }
    
            else {
                display_value.textContent += operandBtns[i].textContent; // for value use attribute in HTML
            }
        });
    }    
}

// Use Calculator
operatorBtns.onclick = getFirstOperand();

function getFirstOperand(){
    for(let i = 0; i < operatorBtns.length; i++) {
        operatorBtns[i].onclick = () => {
            decimalBtn.disabled = false;
    
            if(display_value.textContent === '.') {
                restart();
            }
            else {
                operator = operatorBtns[i].value;
                op_registered = 1;
        
                firstOperand = Number(display_value.textContent);
                let currentFirst = firstOperand;
        
                mini_display.textContent = `${currentFirst} ${operator}`;
                display_value.textContent = currentFirst;
            }
        }
    }
}

// Equal Button
equalBtn.onclick = () => {
    decimalBtn.disabled = false;
    if(operator === null) {
        resetOperands();
    }
    else {
        if(Number(display_value.textContent) === result) {
            firstOperand = result;
            result = Math.round(operate(operator, result, secondOperand) * 10) / 10;

            // in case the result is bigger than the screen we reset the calculator
            if(result.toString().length > 7) {
                alert("Uh-oh! Looks like that's a bigger number than we can handle.");
                alert("Let me help you with that.");
                restart();
            }
            else {
                mini_display.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
                display_value.textContent = result;
                computed = 1;
            }
   
        }

        else {
            enableBtns();
            secondOperand = Number(display_value.textContent);
            result = Math.round(operate(operator, firstOperand, secondOperand) * 10) / 10;

            // in case the result is bigger than the screen we reset the calculator
            if(result.toString().length > 7) {
                alert("Uh-oh! Looks like that's a bigger number than we can handle.");
                alert("Let me help you with that.");
                restart();
            }
            else {
                mini_display.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
                display_value.textContent = result;
                computed = 1;
            }

        }
    }
}

// Backspace Button
deleteBtn.onclick = () => {
    if(display_value.textContent === '' || display_value.textContent.length === 1) {
        display_value.textContent = '0';
    }

    else {
        if(display_value.textContent.slice(0, -1).includes('.') === false) {
            decimalBtn.disabled = false;
        }
        display_value.textContent = display_value.textContent.slice(0, -1);
    }
}

// Sign Button
signBtn.onclick = () => {
    if(Number(display_value.textContent) < 0 || display_value.textContent === '-0') {
        display_value.textContent = display_value.textContent.substring(1);
    }
    else {
        display_value.textContent = "-" + display_value.textContent;
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


/* Keyboard Support */
window.addEventListener('keydown', function(e) {

    // Populating Display
    if(e.key >= 0 && e.key <= 9) {
        if(display_value.textContent.length > 7) {
            display_value.textContent = display_value.textContent.substring(0, 7);
        }

        if(firstOperand !== 0) {
            disableBtns();
        }

        if(display_value.textContent == 0 || op_registered === 1 || computed === 1) {
            display_value.textContent = e.key;
            op_registered = 0;
            computed = 0;
        }

        else {
            display_value.textContent += e.key; // for value use attribute in HTML
        }
    }

    // Registering Operator
    if(e.key === '+' || e.key === '-' || e.key === '*' ||e.key === '/' ) {
        decimalBtn.disabled = false;
        if(display_value.textContent === '.') {
            restart();
        }
        else {
            operator = e.key;
            op_registered = 1;
    
            firstOperand = Number(display_value.textContent);
            let currentFirst = firstOperand;
    
            mini_display.textContent = `${currentFirst} ${operator}`;
            display_value.textContent = currentFirst;
        }
    }

    // Computing Result
    if(e.key === 'Enter') {
        decimalBtn.disabled = false;
        if(operator === null) {
            resetOperands();
        }
    
        else {
            if(Number(display_value.textContent) === result) {
                firstOperand = result;
                result = Math.round(operate(operator, result, secondOperand) * 10) / 10;

                if(result.toString().length > 7) {
                    alert("Uh-oh! Looks like that's a bigger number than we can handle.");
                    alert("Let me help you with that.");
                    restart();
                }
                else {
                    mini_display.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
                    display_value.textContent = result;
                    computed = 1;
                }
            }
    
            else {
                enableBtns();
                secondOperand = Number(display_value.textContent);
                result = Math.round(operate(operator, firstOperand, secondOperand) * 10) / 10;
                
                if(result.toString().length > 7) {
                    alert("Uh-oh! Looks like that's a bigger number than we can handle.");
                    alert("Let me help you with that.");
                    restart();
                }

                else {
                    mini_display.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
                    display_value.textContent = result;
                    computed = 1;
                }

            }
        }        
    }

    // Backspace Function
    if(e.key === 'Backspace') {
        if(display_value.textContent === '' || display_value.textContent.length === 1) {
            display_value.textContent = '0';
        }
    
        else {
            if(display_value.textContent.slice(0, -1).includes('.') === false) {
                decimalBtn.disabled = false;
            }
            display_value.textContent = display_value.textContent.slice(0, -1);
        }        
    }

    // Decimal Function
    if(e.key === '.') {
        if(display_value.textContent.includes('.')) {
            decimalBtn.disabled = true;
        }
        else {
            if(display_value.textContent.length > 7) {
                display_value.textContent = display_value.textContent.substring(0, 7);
            }

            if(firstOperand !== 0) {
                disableBtns();
            }
    
            if(display_value.textContent == 0 || op_registered === 1 || computed === 1) {
                display_value.textContent = e.key;
                op_registered = 0;
                computed = 0;
            }
    
            else {
                display_value.textContent += e.key; // for value use attribute in HTML
            }
        }
    }   

    // Clear Display
    if(e.key === 'Escape') {
        display_value.textContent = 0;
        mini_display.textContent = '';
        operator = null;
        resetOperands();
        enableBtns();
        decimalBtn.disabled = false;        
    }
});