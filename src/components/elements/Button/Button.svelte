<script>
	import colors from "../../../lib/constants/colors.js";
	import clsx from "clsx";

	export let color = "gray";
	export let as = "button";

	const { class: className, ...restProps } = $$restProps;

	const colorObj = colors[color];
</script>

<svelte:element
	this={as}
	class={clsx(
		"button flex items-center justify-center whitespace-nowrap rounded-xl transition-all duration-200 hover:scale-105 active:scale-95",
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
