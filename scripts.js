// @ts-check

/**
 * Finds and returns the HTML element with the specified data attribute.
 *
 * @param {object} props - The properties object containing parameters for the element search.
 * @param {string} props.dataAttr - The data attribute to search for, excluding the `data-` prefix.
 * @param {string} [props.value] - Optional value assigned to the data attribute, if any.
 * @returns {HTMLElement} - The HTML element with the specified data attribute.
 * @throws Throws an error if the element with the specified data attribute is not of type 'HTMLElement'.
 */
const getHTML = (props) => {
	const { dataAttr, value } = props;

	const selector = value
		? `[data-${dataAttr}]="${value}"`
		: `[data-${dataAttr}]`;

	const element = document.querySelector(selector);

	if (!(element instanceof HTMLElement)) {
		throw new Error(`${element} is not an HTMLElement instance.`);
	}

	return element;
};

/**
 * @typedef {Object} Tally - Represents a tally object.
 * @property {number} value - The current value of the tally counter.
 * @property {Function} increment - Function to increase the {@link Tally#value} by `1`.
 * @property {Function} decrement - Function to decrease the {@link Tally#value} by `1`.
 * @property {Function} reset - Function to reset the {@link Tally#value} to `0`.
 */

/**
 * The tally object that keeps track of the tally counter value and provides methods to manipulate it.
 *
 * @type {Tally}
 * */
const tally = {
	value: 0,

	increment() {
		this.value += 1;
	},

	decrement() {
		this.value -= 1;
	},

	reset() {
		this.value = 0;
	},
};

// Query-selecting of elements to be dynamically manipulated
const elements = {
	tallyValue: getHTML({ dataAttr: "tally-value" }),
	minusButton: getHTML({ dataAttr: "minus-button" }),
	plusButton: getHTML({ dataAttr: "plus-button" }),
	resetCounter: getHTML({ dataAttr: "reset-counter" }),
};

// Event handlers

elements.minusButton.addEventListener("click", () => {
	tally.decrement();
	elements.tallyValue.textContent = tally.toString();
});

elements.plusButton.addEventListener("click", () => {
	tally.increment();
	elements.tallyValue.textContent = tally.toString();
});

elements.resetCounter.addEventListener("click", () => {
	tally.reset();
	elements.tallyValue.textContent = tally.toString();
});
