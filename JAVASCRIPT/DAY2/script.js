// Insert number or operator to display
function insert(num) {
    document.getElementById('result').value += num;
}

// Clear the display
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Remove the last character from the display
function backspace() {
    let exp = document.getElementById('result').value;
    document.getElementById('result').value = exp.substring(0, exp.length - 1);
}

// Perform the calculation
function calculate() {
    let exp = document.getElementById('result').value;
    if (exp) {
        document.getElementById('result').value = eval(exp);
    }
}
