<script>
	import twColors from 'tailwindcss/colors';

	export let color = 'gray';
	export let as = 'button';

	function cssVariables(node, variables) {
		setCssVariables(node, variables);

		return {
			update(variables) {
				setCssVariables(node, variables);
			},
		};
	}
	function setCssVariables(node, variables) {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	}
</script>

<svelte:element this={as} class="button">
	<slot />
</svelte:element>

<style>
	.button {
		font-size: calc(var(--size) * 1px);
		color: var(--color);
		background-color: var(--color);
	}
</style>
