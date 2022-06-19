<script>
	import Button from "./../Button/Button.svelte";
	import List from "phosphor-svelte/lib/List";
	import clsx from "clsx";
	import X from "phosphor-svelte/lib/X";
	import { portal } from "../../../lib/actions/portal";
	import url from "../../../lib/stores/url";

	let open = false;

	function toggleOpen() {
		open = !open;
	}

	url.subscribe(() => (open = false));
</script>

<div class="relative flex h-full">
	<Button class="z-50 aspect-square h-full" as="button" type="button" on:click={toggleOpen}>
		{#if open}
			<X class="h-6 w-6" weight="bold" />
			<div
				use:portal={"root"}
				class="fixed inset-0 top-0 left-0 z-40 h-full w-full bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
			/>
		{:else}
			<List class="h-6 w-6" weight="bold" />
		{/if}
	</Button>
	<div
		class={clsx(
			"z-50 highlight-white/20 absolute top-full left-1/2 mt-4 flex -translate-x-1/2 flex-col w-60 gap-3 rounded-xl bg-gray-600 p-5 shadow-lg transition-all duration-200",
			open ? "translate-y-0 scale-y-100 opacity-100" : "opacity-0 -translate-y-5 scale-y-90"
		)}
	>
		<slot />
	</div>
</div>

<style>
	.highlight-white\/20 {
		box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
	}
</style>
