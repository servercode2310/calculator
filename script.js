const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (!value) return;

    if (resultDisplayed) {
      if ('+-*/'.includes(value)) {
        currentInput = display.textContent + value;
      } else {
        currentInput = value;
      }
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});

equals.addEventListener('click', () => {
  try {
    const output = eval(currentInput);
    display.textContent = output;
    currentInput = output.toString();
    resultDisplayed = true;
  } catch (e) {
    display.textContent = "Error";
    currentInput = '';
  }
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
});
