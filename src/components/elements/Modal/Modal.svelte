<script>
	import { portal } from "../../../lib/actions/portal";
	import clickOutside from "../../../lib/actions/clickOutside";
	import clsx from "clsx";
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";

	export let open = false;
	export let cardProps = {};
	export let exclude;

	const { class: className } = $$restProps;

	const { class: cardClassName, ...restCardProps } = cardProps;

	function onClickOutside() {
		open = false;
	}

	$: if (exclude) {
		for (const excluded of exclude) {
			excluded.style.zIndex = 50;
		}
	}
</script>

{#if open}
	<div
		use:portal={"root"}
		class={clsx(
			"fixed inset-0 top-0 left-0 z-40 h-full w-full bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 flex justify-center items-center",
			className
		)}
	>
		<div
			transition:fly={{ y: -10, duration: 200 }}
			class={clsx(
				"z-50 highlight-white/20 rounded-xl bg-gray-600 p-5 shadow-lg transition-all duration-200",
				cardClassName
			)}
			use:clickOutside={{ callback: onClickOutside, exclude }}
		>
			<slot />
		</div>
	</div>
{/if}

<style>
	.highlight-white\/20 {
		box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
	}
</style>
