// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
export default function hasValue(value) {
	return value != null && !(Array.isArray(value) && value.length === 0);
}
