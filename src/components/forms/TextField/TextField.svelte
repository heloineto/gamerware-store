<script>
	import clsx from "clsx";

	export let name;
	export let label;
	export let value = "";

	let focus = false;
	let input;

	$: shrink = value !== "" || focus;
</script>

<div
	class={clsx(
		"relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600",
		$$props.class
	)}
>
	<label
		for={name}
		class={clsx(
			"absolute left-2 inline-block bg-gray-600 px-1 transition-all rounded-md",
			focus ? "text-green-500" : "text-gray-100",
			shrink ? "top-[-9px] text-xs font-medium" : "top-[5px] font-normal text-base"
		)}
	>
		{label}
	</label>
	<input
		class="block w-full border-0 bg-transparent p-0 text-gray-100 placeholder-gray-500 focus:ring-0 sm:text-sm"
		type="text"
		bind:this={input}
		bind:value
		on:focus={() => (focus = true)}
		on:blur={() => (focus = false)}
		id={name}
		{name}
	/>
</div>
