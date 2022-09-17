const display_value = document.querySelector('#display');
const mini_display = document.querySelector('#op-display');
const operandBtns = document.querySelectorAll('.operand');

const addBtn = document.querySelector('#addition');
const substractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equals');


const clearBtn = document.querySelector('#clear');


// Populate Display
for(let i = 0; i < operandBtns.length; i++) {
    operandBtns[i].addEventListener('click', function() {
        if(display_value.textContent == 0) {
            display_value.textContent = operandBtns[i].textContent;
        }

        else {
            display_value.textContent += operandBtns[i].textContent; // for value use attribute in HTML
        }
        
    });
}

// Clear Display
clearBtn.onclick = () => { display_value.textContent = 0; mini_display.textContent = '' };

/* 
    1. Input first operand
    2. Press Operator
        a. Store Display Value in a variable
        b. Reset Display
    3. Input second operand
    4. Press '='
    5. Show result in display
*/

let firstOperand = 0;
let secondOperand = 0;
let result = 0;

addBtn.onclick = () => {
    firstOperand = Number(display_value.textContent);
    display_value.textContent = 0;
    mini_display.textContent = `${firstOperand} ${addBtn.textContent}`;
    // console.log(firstOperand);

    equalBtn.onclick = () => {
        secondOperand = Number(display_value.textContent);
        // console.log(secondOperand);
        display_value.textContent = operate(add, firstOperand, secondOperand);
        mini_display.textContent = `${firstOperand} + ${secondOperand} =`;
    }
    
}

substractBtn.onclick = () => {
    firstOperand = Number(display_value.textContent);
    display_value.textContent = 0;
    mini_display.textContent = `${firstOperand} ${substractBtn.textContent}`;
    // console.log(firstOperand);

    equalBtn.onclick = () => {
        secondOperand = Number(display_value.textContent);
        // console.log(secondOperand);
        display_value.textContent = operate(subtract, firstOperand, secondOperand);
        mini_display.textContent = `${firstOperand} ${substractBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
    }
}

multiplyBtn.onclick = () => {
    firstOperand = Number(display_value.textContent);
    display_value.textContent = 0;
    mini_display.textContent = `${firstOperand} ${multiplyBtn.textContent}`;
    // console.log(firstOperand);

    equalBtn.onclick = () => {
        secondOperand = Number(display_value.textContent);
        // console.log(secondOperand);
        display_value.textContent = operate(multiply, firstOperand, secondOperand);
        mini_display.textContent = `${firstOperand} ${multiplyBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
    }
}

divideBtn.onclick = () => {
    firstOperand = Number(display_value.textContent);
    display_value.textContent = 0;
    mini_display.textContent = `${firstOperand} ${divideBtn.textContent}`;
    // console.log(firstOperand);

    equalBtn.onclick = () => {
        secondOperand = Number(display_value.textContent);
        // console.log(secondOperand);
        display_value.textContent = operate(divide, firstOperand, secondOperand);
        mini_display.textContent = `${firstOperand} ${divideBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
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
    return operator(op1, op2);
}

// console.log(operate(add, 2, 5));