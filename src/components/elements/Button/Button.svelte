<script>
	import colors from "../../../lib/constants/colors.js";
	import classes from "../../../lib/utils/classes";

	export let color = "gray";
	export let as = "button";
	export let disabled = false;

	const { class: className, ...restProps } = $$restProps;

	const colorObj = colors[color];
</script>

<svelte:element
	this={as}
	class={classes(
		"button disabled:cursor-not-allowed disabled:!bg-gray-700 disabled:!text-gray-300 disabled:hover:bg-gray-800 flex items-center justify-center whitespace-nowrap rounded-xl transition-all duration-200 hover:scale-105 active:scale-95",
		className
	)}
	style="
		--backgroundColor: {colorObj[700]};
		--color: {colorObj[300]};
		--hoverBackgroundColor: {colorObj[800]};
	"
	on:click
	on:mouseenter
	on:mouseleave
	{disabled}
	{...restProps}
>
	<slot />
</svelte:element>

<style>
	.button {
		color: var(--color);
		background-color: var(--backgroundColor);
	}

	.button:hover {
		background-color: var(--hoverBackgroundColor);
	}
</style>
