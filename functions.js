function clearDisplay(){
    document.getElementById("display").value=0;
}

function addToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        let display = document.getElementById('display');
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}