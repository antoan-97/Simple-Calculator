function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let displayValue = document.getElementById('display').value;
        // Check if the display contains '%'
        if (displayValue.includes('%')) {
            // Replace '%' with '/100*' and evaluate the expression
            let expression = displayValue.replace(/%/g, '/100*');
            let result = eval(expression);
            document.getElementById('display').value = result;
        } else {
            // If no '%', perform regular evaluation
            document.getElementById('display').value = eval(displayValue);
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function handleInput() {
    // Handle input as needed
    console.log('Input detected:', document.getElementById('display').value);
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
