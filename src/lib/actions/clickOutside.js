export default function clickOutside(node, { callback, exclude }) {
	function onClickOutside(event) {
		if (node.contains(event.target)) return;
		if (exclude) {
			for (const excluded of exclude) {
				if (excluded.contains(event.target)) return;
			}
		}

		callback();
	}

	document.body.addEventListener("pointerdown", onClickOutside);

	return {
		update(updates) {
			callback = updates.callback;
			exclude = updates.exclude;
		},
		destroy() {
			document.body.removeEventListener("pointerdown", onClickOutside);
		},
	};
}
