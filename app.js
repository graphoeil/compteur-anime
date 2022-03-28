// Variables
// Tous les span.number, le résultat NodeList est converti en Array
const numbers = [ ...document.querySelectorAll('.number') ];

// Update count
const updateCount = (el) => {
	const value = parseInt(el.dataset.value);
	const increment = Math.ceil(value / 1000);
	let initialValue = 0;
	// Timer pour l'animation
	const increaseCount = setInterval(() => {
		initialValue += increment;
		if (initialValue > value){
			el.textContent = `${ value }+`;
			clearInterval(increaseCount);
			return;
		}
		el.textContent = `${ initialValue }+`;
	},1);
};

// Iterate over span.number
numbers.forEach((number) => {
	updateCount(number);
});