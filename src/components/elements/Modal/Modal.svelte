<script>
	import { portal } from "../../../lib/actions/portal";
	import clickOutside from "../../../lib/actions/clickOutside";
	import classes from "../../../lib/utils/classes";
	import { fly } from "svelte/transition";

	export let open = false;
	export let cardProps = {};
	export let exclude;
	export let onClose;

	const { class: className } = $$restProps;

	const { class: cardClassName } = cardProps;

	function onClickOutside() {
		onClose?.();
	}

	$: if (exclude) {
		for (const excluded of exclude) {
			excluded.style.zIndex = 50;
		}
	}
</script>

{#if open}
	<div
		role="dialog"
		use:portal={"root"}
		class={classes(
			"fixed inset-0 top-0 left-0 z-40 h-full w-full bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 flex justify-center items-center",
			className
		)}
	>
		<div
			transition:fly={{ y: -10, duration: 200 }}
			class={classes("z-50 highlight-white rounded-xl bg-gray-600 p-5 shadow-lg", cardClassName)}
			use:clickOutside={{ callback: onClickOutside, exclude }}
		>
			<slot />
		</div>
	</div>
{/if}
