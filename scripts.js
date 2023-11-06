// @ts-check

/**
 * The state of the tally app
 * @type {number} */
let tally = 0;

// Query-selecting of elements to be dynamically manipulated

/** @type {HTMLElement | null} */
const tallyCount = document.querySelector("[data-tally-value]");

/** @type {HTMLElement | null} */
const minusButton = document.querySelector("[data-minus-button]");

/** @type {HTMLElement | null} */
const plusButton = document.querySelector("[data-plus-button]");

/** @type {HTMLElement | null} */
const resetCounter = document.querySelector("[data-reset-counter]");

// Event handlers and Exception handling

if (!(tallyCount instanceof HTMLElement)) {
	throw new Error(`${tallyCount} is not an HTMLElement instance.`);
}

if (!(minusButton instanceof HTMLElement)) {
	throw new Error(`${minusButton} is not an HTMLElement instance.`);
}
minusButton.addEventListener("click", () => {
	tally -= 1;
	tallyCount.textContent = tally.toString();
});

if (!(plusButton instanceof HTMLElement)) {
	throw new Error(`${plusButton} is not an HTMLElement instance.`);
}
plusButton.addEventListener("click", () => {
	tally += 1;
	tallyCount.textContent = tally.toString();
});

if (!(resetCounter instanceof HTMLElement)) {
	throw new Error(`${resetCounter} is not an HTMLElement instance.`);
}
resetCounter.addEventListener("click", () => {
	tally = 0;
	tallyCount.textContent = tally.toString();
});
