<script>
	import CaretLeft from "phosphor-svelte/lib/CaretLeft";
	import classes from "../../../lib/utils/classes";

	export let direction = "NEXT";
	export let disabled = false;

	const { class: className, ...restProps } = $$restProps;
</script>

<div
	class={classes("flex h-full px-2 items-center justify-center rounded-full", className)}
	{...restProps}
>
	<button
		{disabled}
		on:click
		class={classes(
			"z-10 rounded-full border p-2 border-white bg-white/25 text-white",
			disabled ? "opacity-50" : "transition-transform duration-200 hover:scale-105 active:scale-95"
		)}
	>
		<CaretLeft class={direction === "NEXT" ? "rotate-180" : ""} weight="bold" />
	</button>
</div>
