// @ts-check

import { elements, createAlertComponent } from "./modules/dom-manipulation.js";

/**
 * @typedef {Object} Tally - Represents a tally object.
 * @property {number} value - The current value of the tally counter.
 * @property {Function} increment - Function to increase the {@link Tally.value} by `1`.
 * @property {Function} decrement - Function to decrease the {@link Tally.value} by `1`.
 * @property {Function} reset - Function to reset the {@link Tally.value} to `0`.
 */

/**
 * The tally object that keeps track of the tally counter value and provides
 * methods to manipulate it, as defined in the {@link Tally} `typedef`.
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

/**
 * Handles the creation of the alert component, appends it to the DOM, and
 * simulates a toast-like behavior.
 *
 * @returns {HTMLElement} - The created alert element.
 */
const alertToastNotifierHandler = () => {
	const alert = createAlertComponent({
		message: "Tally Counter successfully reset to 0",
		variant: "success",
		closable: true,
		duration: 3000,
		icon: "check2-circle",
	});

	elements.alertContainer.appendChild(alert);

	// TODO: Method is available for the web component, I haven't figured out how to integrate it.
	// @ts-ignore
	return alert.toast();
};

// Click Event Listeners

elements.minusButton.addEventListener("click", () => {
	tally.decrement();
	elements.tallyValue.textContent = String(tally.value);
});

elements.plusButton.addEventListener("click", () => {
	tally.increment();
	elements.tallyValue.textContent = String(tally.value);
});

// TODO: Toast notification displays on the second click, need to figure out why.
elements.resetCounter.addEventListener("click", () => {
	tally.reset();
	elements.tallyValue.textContent = String(tally.value);

	alertToastNotifierHandler();
});
