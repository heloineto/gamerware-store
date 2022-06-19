export default function mutation(node, options) {
	let observer = null;

	function update(options = {}) {
		destroy();
		observer = new MutationObserver((mutations) => {
			for (const _mutation of mutations) {
				options?.[_mutation.type](_mutation);
			}
		});
		observer.observe(node, options);
	}

	function destroy() {
		observer?.disconnect();
		observer = null;
	}

	update(options);

	return { update, destroy };
}
