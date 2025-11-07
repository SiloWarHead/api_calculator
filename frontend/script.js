let expression = '';

// Append number or operator to display
function appendNumber(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

// Clear display
function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

// Call backend API to calculate
async function calculate() {
  if (!expression) return;

  try {
    // Update this URL if deployed on Render
    const response = await fetch('http://localhost:5000/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression })
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      clearDisplay();
    } else {
      expression = data.result.toString();
      document.getElementById('display').value = expression;
    }
  } catch (e) {
    alert('Cannot connect to backend API. Make sure it is running.');
  }
}