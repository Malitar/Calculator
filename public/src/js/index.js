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

function display(calcInput){

    const input = calcInput.target.getAttribute("data-key");
    switch(input) {
        case 'reset': 
            globalInput = ``;
            clear();
            break;
        default: 
            globalInput += input;
            console.table(`${globalInput}`);
            update(globalInput);
    }
}


function update(userInput) {
    /**
     * [] get user input 
     * [] get divs to manipulate
     * [] update userInput => string to array
     * [] string to array => 3 variablen
     * [] display input
     */
    
    console.log(userInput);
    const currentInput = document.querySelector('.display');
    let inputchild = document.createElement('span');
    if(currentInput.hasChildNodes()){
        clear();
    }
 
    inputchild.textContent = userInput;
    console.log(inputchild);
    currentInput.appendChild(inputchild);
    
}

function clear(){
    const clear = document.querySelector('.display');
    const child = clear.lastElementChild;
    if(clear.hasChildNodes()){
        clear.removeChild(child);
    }
    
}

function reset() {
    const reset = document.querySelector(`.display`);

}

/* 
console.log(operator(1, 2, '+'));
console.log(operator(1, 2, '-'));
console.log(operator(4, 2, '*'));
console.log(operator(4, 2, '/'));
console.log(operator(4, 2, '12'));
 */
const calculatorBtn = document.querySelectorAll('button');
let globalInput = ``;
calculatorBtn.forEach(btn => btn.addEventListener('click', display));