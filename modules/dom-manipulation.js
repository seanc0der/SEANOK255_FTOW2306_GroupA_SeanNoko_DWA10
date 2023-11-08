// @ts-check

/**
 * Escapes HTML characters in a text argument to prevent potential security vulnerabilities.
 *
 * @param {string} HTMLText - The text content to be sanitized for any potential HTML characters.
 * @returns {string} - The text content with HTML characters properly escaped.
 */
const escapeHTML = (HTMLText) => {
	const tempDiv = document.createElement("div");
	tempDiv.textContent = HTMLText;

	return tempDiv.innerHTML;
};

/**
 * The`<sl-alert>` component's theme variant from the `Shoelace` library.
 * @typedef {"primary" | "success" | "neutral" | "warning" | "danger"} Variant
 */

/**
 * Create an alert component based on the provided properties.
 *
 * @param {Object} props - The properties for the alert component.
 * @param {string} props.message - The alert’s main text content.
 * @param {Variant} [props.variant="primary"] - The `sl-alert`'s theme variant. Defaults to `primary` if no value is passed. See {@link Variant}.
 * @param {boolean} [props.closable=false] - Indicates if a close button should be enabled for the alert. The default is `false`.
 * @param {Infinity | number} [props.duration=Infinity] - The duration the alert will show before closing itself, in milliseconds. The default duration is `Infinity`.
 * @param {string} [props.icon="info-circle"] - The icon to show in the alert. The default is the `info-cicle` from the Shoelace icons' library.
 * @returns {HTMLElement} The created alert element.
 */
const createAlertComponent = (props) => {
	const { message, variant, closable, duration, icon } = props;

	const alertElement = document.createElement("sl-alert");

	alertElement.setAttribute("variant", String(variant));
	alertElement.setAttribute("closable", String(closable));
	alertElement.setAttribute("duration", String(duration));

	alertElement.innerHTML = /* html */ `
        <sl-icon name="${icon}" slot="icon"></sl-icon>
        <strong>${escapeHTML(message)}</strong>
    `;

	return alertElement;
};

/**
 * Finds and returns the HTML element with the specified data attribute.
 *
 * @param {object} props - The properties object containing parameters for the element search.
 * @param {string} props.dataAttr - The data attribute to search for, excluding the `data-` prefix.
 * @param {string} [props.value] - Optional value assigned to the data attribute, if any.
 * @returns {HTMLElement} The HTML element with the specified data attribute.
 * @throws Throws an error if the element with the specified data attribute is not of type `HTMLElement`.
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

const elements = {
	tallyValue: getHTML({ dataAttr: "tally-value" }),
	minusButton: getHTML({ dataAttr: "minus-button" }),
	plusButton: getHTML({ dataAttr: "plus-button" }),
	resetCounter: getHTML({ dataAttr: "reset-counter" }),
	alertContainer: getHTML({ dataAttr: "alert-container" }),
};

export { createAlertComponent, elements };
