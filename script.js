const add = function(operand1, operand2) {
    return operand1 + operand2;
}

console.log(add(2,3));

const subtract = function (operand1, operand2) {
    return operand1 - operand2;
}

console.log(subtract(100, 50));

const multiply = function (operand1, operand2) {
    return operand1 * operand2;
}

console.log(multiply(10, 10));

const divide = function (operand1, operand2) {
    return operand1 / operand2;
}

console.log(divide(9,4));

function operate(operator, op1, op2) {
    return operator(op1, op2);
}

console.log(operate(subtract, 15, 3));