/* ************************
 * MATH FUNCTIONS
 ************************ */
/**
 * FUNCTIONS TO RETRUN ADDITION RESULT
 * OF TWO PARAMS
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * FUNCTIONS TO RETRUN SUBTRACTION RESULT
 * OF TWO PARAMS
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function sub(num1, num2) {
    return num1 - num2;
}

/**
 * FUNCTIONS TO RETRUN MULTIPLY RESULT
 * OF TWO PARAMS
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * FUNCTIONS TO RETRUN DIVIDE RESULT
 * OF TWO PARAMS
 * 
 * @param {number} num1 
 * @param {number} num2 
 */
function divide(num1, num2) {
    return num1 / num2;
}
/**
 * FUNCTIONS TO EVALUATE OPERATION
 * AND CALL MATH FUNCTION
 *  
 * @param {number} num1 
 * @param {number} num2 
 * @param {*} operator 
 */
const operator = function (num1, num2, operator) {
    operator = operator.toString();
    operator = adjustOperator(operator);
    
    switch (operator) {
        case `+`:
            return add(num1, num2);
        case `-`:
            return sub(num1, num2);
        case `*`:
            return multiply(num1, num2);
        case `/`:
            return divide(num1, num2);
        default:
            return console.log(`${operator} is not an operator`);
    }
};

const adjustOperator = (operator) => {

    const processedOperator = operator.replace(/![+\-\*\/]/g, " ");
    console.table(processedOperator);
    //processedreplace

    return processedOperator;
}

console.log(operator(1, 2, '+'));
console.log(operator(1, 2, '-'));
console.log(operator(4, 2, '*'));
console.log(operator(4, 2, '/'));
console.log(operator(4, 2, '12'));