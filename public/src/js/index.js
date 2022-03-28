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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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

/**
 * Function to differentiate between input values
 * 
 * @param {string} calcInput 
 */
function display(calcInput) {

    const input = calcInput.target.getAttribute("data-key");

    switch (input) {
        case 'reset':
            globalInput = ``;
            clear();
            resetter = false;
            break;
        case ` = `:
            const newInput = globalInput.split(" ");
            let result = operator(newInput[0], newInput[2], newInput[1]);
            globalInput = result;
            update(globalInput);
            resetter = true;
            countOperator = 0;
            break;

        default:
            if (resetter === true) {
                globalInput = ``;
                clear();
                resetter = false;
            }

            switch (input) {
                case ' + ':
                    countOperator += 1;
                    break;
                case ' - ':
                    countOperator += 1;
                    break;
                case ' * ':
                    countOperator += 1;
                    break;
                case ' / ':
                    countOperator += 1;
                    break;
            }

            if (countOperator == 2) {
                countOperator = 1;
                clear();
                const newInput = globalInput.split(" ");
                console.table(`New Input: ${newInput}`);
                let result = operator(newInput[0], newInput[2], newInput[1]);
                globalInput = `${result}` + `${input}`;
                console.log(`GlobalInput: ${globalInput}`);
                update(globalInput);

            } else {
                globalInput += input;
                update(globalInput);
                console.log(`GlobalInput 2: ${globalInput}`);
            }
        break;
    }
}


function update(userInput) {
    const currentInput = document.querySelector('.display');
    let inputchild = document.createElement('span');
    if (currentInput.hasChildNodes()) {
        clear();
    }
    inputchild.textContent = userInput;
    currentInput.appendChild(inputchild);
}

/**
 * Function to clear current input on display
 */
function clear() {
    const clear = document.querySelector('.display');
    const child = clear.lastElementChild;
    if (clear.hasChildNodes()) {
        clear.removeChild(child);
    }

}

const calculatorBtn = document.querySelectorAll('button');
let globalInput = ``;
let resetter = false;
let inputCounter = 0;
let countOperator = 0;
calculatorBtn.forEach(btn => btn.addEventListener('click', display));