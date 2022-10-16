const display = document.querySelector('input');
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((item) => {
	if (item.textContent != '=') {
		item.addEventListener('click', () => {
			displayText(item.textContent);
		});
	}
});

function displayText(text) {
	display.value += text;
}
