import hasValue from "./hasValue";

/**
 * Determine if field is empty or filled.
 * Response determines if label is presented above field or as placeholder.
 *
 * @param {[*]} obj
 * @param {boolean} SSR
 * @returns {boolean} False when not present or empty string.
 *                    True when any number or string with length.
 */
export default function isFilled(obj, SSR = false) {
	return (
		obj &&
		((hasValue(obj.value) && obj.value !== "") ||
			(SSR && hasValue(obj.defaultValue) && obj.defaultValue !== ""))
	);
}
