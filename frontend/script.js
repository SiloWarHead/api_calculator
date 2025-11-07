let currentInput = '';
const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

async function calculate() {
    if (currentInput === '') return;

    try {
        const response = await fetch('https://api-calculator-dss1.onrender.com/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ expression: currentInput })
        });

        const data = await response.json();

        if (data.error) {
            alert(data.error);
            clearDisplay();
        } else {
            currentInput = data.result.toString();
            display.value = currentInput;
        }
    } catch (err) {
        alert('Error connecting to API');
        console.error(err);
    }
}
