<script>
	import twColors from 'tailwindcss/colors';
	import cssVariables from '../../../lib/utils/cssVariables';
	import clsx from 'clsx';

	export let color = 'gray';
	export let as = 'button';

	const { class: className, ...divProps } = $$restProps;

	const backgroundColor = twColors[color][700];
	const textColor = twColors[color][300];
	const hoverBackgroundColor = twColors[color][800];
</script>

<svelte:element
	this={as}
	class={clsx(
		'button flex flex-grow items-center justify-center whitespace-nowrap rounded-xl transition-colors duration-[400ms]',
		className
	)}
	use:cssVariables={{ backgroundColor, color: textColor, hoverBackgroundColor }}
	{...divProps}
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
