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
        case `=`:
            
        default: 
            globalInput += input;
            console.table(`${globalInput}`);
            update(globalInput);
    }
}


function update(userInput) {
    const currentInput = document.querySelector('.display');
    let inputchild = document.createElement('span');
    if(currentInput.hasChildNodes()){
        clear();
    }
    inputchild.textContent = userInput;
    currentInput.appendChild(inputchild);
}

/**
 * Function to clear current input on display
 */
function clear(){
    const clear = document.querySelector('.display');
    const child = clear.lastElementChild;
    if(clear.hasChildNodes()){
        clear.removeChild(child);
    }
}

const calculatorBtn = document.querySelectorAll('button');
let globalInput = ``;
calculatorBtn.forEach(btn => btn.addEventListener('click', display));