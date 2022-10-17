const display = document.querySelector('input');

function displayText(text) {
	display.value += text;
}
function clearText() {
	display.value = '';
	operationType = '';
}
function correctText() {
	let lastSymbol = display.value.charAt(display.value.length - 1);
	if (isNaN(+lastSymbol)) operationType = '';
	display.value = display.value.slice(0, display.value.length - 1);
}

function displayResult(text) {
	display.value = text;
}

const numberButtons = document.querySelectorAll('.numbers button');
numberButtons.forEach((item) => {
	if (item.textContent == 'C') {
		item.addEventListener('click', () => {
			clearText();
		});
	} else if (item.textContent == '<-') {
		item.addEventListener('click', () => {
			correctText();
		});
	} else {
		item.addEventListener('click', () => {
			displayText(item.textContent);
		});
	}
});
const operationButtons = document.querySelectorAll('.operations button');
let operationType = '';
operationButtons.forEach((item) => {
	if (item.textContent != '=') {
		item.addEventListener('click', () => {
			if (operationType === '') {
				operationType = item.textContent;
				displayText(item.textContent);
			} else {
				displayResult(calculate(operationType));
				operationType = '';
			}
		});
	} else {
		item.addEventListener('click', () => {
			if (operationType !== '') {
				displayResult(calculate(operationType));
				operationType = '';
			}
		});
	}
});

function calculate(typeOfOperation) {
	let raw = display.value;
	let numbers = raw.split(typeOfOperation);
	numbers.forEach((item, index) => {
		item = +item;
		numbers[index] = item;
	});
	if (numbers[1] === 0) {
		numbers[1] = numbers[0];
	}
	switch (typeOfOperation) {
		case '+':
			return numbers[0] + numbers[1];
		case '-':
			return numbers[0] - numbers[1];
		case '*':
			return numbers[0] * numbers[1];
		case '/':
			return numbers[0] / numbers[1];
	}
}
