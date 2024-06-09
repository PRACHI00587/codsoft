document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentOperand = '';
    let previousOperand = '';
    let operation = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value >= '0' && value <= '9' || value === '.') {
                appendNumber(value);
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                compute();
            } else {
                chooseOperation(value);
            }
        });
    });

    function clearDisplay() {
        currentOperand = '';
        previousOperand = '';
        operation = '';
        updateDisplay();
    }

    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + number.toString();
        updateDisplay();
    }

    function chooseOperation(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
        updateDisplay();
    }

    function compute() {
        let result;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = prev/(100);
                break;
            default:
                return;
        }
        currentOperand = result;
        operation = '';
        previousOperand = '';
        updateDisplay();
    }

    function updateDisplay() {
        display.value = previousOperand + operation + currentOperand;
    }

    clearDisplay();
});

