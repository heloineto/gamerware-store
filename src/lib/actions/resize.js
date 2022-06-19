export default function resize(node, callback, options) {
	let observer = null;

	function update(callback) {
		destroy();
		observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				callback?.(entry);
			}
		});
		observer.observe(node, options);
	}

	function destroy() {
		observer?.disconnect();
		observer = null;
	}

	update(callback);

	return { update, destroy };
}
