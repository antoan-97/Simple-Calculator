let result = document.getElementById('display').value

function calculateResult() {
    try {
        // Check if the display contains '%'
        if (result.includes('%')) {
            // Replace '%' with '/100*' and evaluate the expression
            let expression = result.replace(/%/g, '/100*');
            result = eval(expression);
        } else {
            // If no '%', perform regular evaluation
            result = eval(result);
        }
        updateDisplay();
    } catch (error) {
        result = 'Error';
        updateDisplay()
    }
}

function appendToDisplay(value) {
    result += value;
    updateDisplay();
}


function handleInput() {
    // Handle input as needed
    console.log('Input detected:', result);
}


function updateDisplay() {
    document.getElementById('display').value = result;
}

function clearDisplay() {
    result = '';
    updateDisplay();
}
