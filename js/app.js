const inputEl = document.getElementById('math-input');
const outputEl = document.getElementById('math-output');
const operatorButtons = document.getElementById('math-container').querySelectorAll('button');
operatorButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    updateOutput(item.innerHTML);
  });
});

let currentOutput = 0;

function updateOutput(opType) {
  let inputValue = inputEl.value;
  if(isNaN(inputValue) === false && inputValue !== '') {
    inputValue = parseInt(inputValue);
  } else {
    inputValue = 0;
  }

  let newOutputValue = 0;
  switch(opType) {
    case '+':
      newOutputValue = inputValue + currentOutput;
    break;

    case '-':
      newOutputValue = currentOutput - inputValue;
    break;
  }

  currentOutput = newOutputValue;
  renderOutput(newOutputValue);
}

function renderOutput(newOutputValue) {
  outputEl.innerHTML = newOutputValue;

  if(newOutputValue < 0) {
    outputEl.style.color = 'red';
  } else {
    outputEl.style.color = 'black';
  }
}