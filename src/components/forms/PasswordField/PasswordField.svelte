<script>
	import classes from "../../../lib/utils/classes";
	import { afterUpdate, onMount } from "svelte";
	import isFilled from "./utils/isFilled";

	export let name;
	export let label;
	export let value = "";
	export let errors = {};

	let input;

	let filled = isFilled(input);

	afterUpdate(() => {
		filled = isFilled(input);
	});

	let focus = false;

	$: shrink = filled || focus;
</script>

<div class={$$props.class}>
	<div
		class="relative h-10 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-green-400 focus-within:ring-1 focus-within:ring-green-400"
	>
		<label
			for={name}
			class={classes(
				"absolute left-2 inline-block bg-gray-600 px-1 transition-all rounded-md",
				focus ? "text-green-300" : "text-gray-100",
				shrink ? "top-[-9px] text-xs font-medium" : "top-[6px] font-normal text-base"
			)}
		>
			{label}
		</label>
		<input
			class="block w-full border-0 bg-transparent p-0 text-gray-100 placeholder-gray-500 focus:ring-0 sm:text-sm"
			type="password"
			bind:this={input}
			bind:value
			on:focus={() => (focus = true)}
			on:blur={() => (focus = false)}
			id={name}
			{name}
		/>
	</div>
	{#if errors[name]}
		<p class="text-sm text-red-500">{errors[name]}</p>
	{/if}
</div>
