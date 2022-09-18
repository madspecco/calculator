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
        if(display_value.textContent == 0) {
            display_value.textContent = operandBtns[i].textContent;
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

// 1. Input whatever first operand

for(let i = 0; i < operatorBtns.length; i++) {
    const op_pressed = operatorBtns[i];
    // 2. Press Operator
    op_pressed.onclick = () => {

        if(firstOperand !== 0) {
            secondOperand = Number(display_value.textContent);
            result = operate(op_pressed.value, firstOperand, secondOperand);
            display_value.textContent = result;
            mini_display.textContent = `${firstOperand} ${op_pressed.value} ${secondOperand} =`;
            resetOperands();
        }
        // a. Store Display Value
        // b. Reset Display
        firstOperand = Number(display_value.textContent);
        display_value.textContent = 0;
        // c. Update Mini Display
        mini_display.textContent = `${firstOperand} ${op_pressed.value}`;
        
        // 3. Input second operand then 4. Press '='
        equalBtn.onclick = () => {
            // 5. Show Result in display & mini display
            secondOperand = Number(display_value.textContent);
            result = operate(op_pressed.value, firstOperand, secondOperand);
            display_value.textContent = result;
            mini_display.textContent = `${firstOperand} ${op_pressed.value} ${secondOperand} =`;
            resetOperands();
        }
        }
    }





// addBtn.onclick = () => {
//     firstOperand = Number(display_value.textContent);
//     display_value.textContent = 0;
//     mini_display.textContent = `${firstOperand} ${addBtn.textContent}`;
//     // console.log(firstOperand);

//     equalBtn.onclick = () => {
//         secondOperand = Number(display_value.textContent);
//         // console.log(secondOperand);
//         display_value.textContent = operate(add, firstOperand, secondOperand);
//         mini_display.textContent = `${firstOperand} + ${secondOperand} =`;
//     }
// }

// subtractBtn.onclick = () => {
//     firstOperand = Number(display_value.textContent);
//     display_value.textContent = 0;
//     mini_display.textContent = `${firstOperand} ${subtractBtn.textContent}`;
//     // console.log(firstOperand);

//     equalBtn.onclick = () => {
//         secondOperand = Number(display_value.textContent);
//         // console.log(secondOperand);
//         display_value.textContent = operate(subtract, firstOperand, secondOperand);
//         mini_display.textContent = `${firstOperand} ${subtractBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
//     }
// }

// multiplyBtn.onclick = () => {
//     firstOperand = Number(display_value.textContent);
//     display_value.textContent = 0;
//     mini_display.textContent = `${firstOperand} ${multiplyBtn.textContent}`;
//     // console.log(firstOperand);

//     equalBtn.onclick = () => {
//         secondOperand = Number(display_value.textContent);
//         // console.log(secondOperand);
//         display_value.textContent = operate(multiply, firstOperand, secondOperand);
//         mini_display.textContent = `${firstOperand} ${multiplyBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
//     }
// }

// divideBtn.onclick = () => {
//     firstOperand = Number(display_value.textContent);
//     display_value.textContent = 0;
//     mini_display.textContent = `${firstOperand} ${divideBtn.textContent}`;
//     // console.log(firstOperand);

//     equalBtn.onclick = () => {
//         secondOperand = Number(display_value.textContent);
//         // console.log(secondOperand);
//         display_value.textContent = operate(divide, firstOperand, secondOperand);
//         mini_display.textContent = `${firstOperand} ${divideBtn.textContent} ${secondOperand} ${equalBtn.textContent}`;
//     }
// }


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