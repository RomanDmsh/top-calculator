const display = document.querySelector('input');

const numberButtons = document.querySelectorAll('.numbers button');
numberButtons.forEach((item) => {
	item.addEventListener('click', () => {
		displayText(item.textContent);
	});
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
	}
});

function displayText(text) {
	display.value += text;
}
function displayResult(text) {
	display.value = text;
}

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
