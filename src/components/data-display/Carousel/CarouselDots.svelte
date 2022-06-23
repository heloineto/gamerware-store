<script>
	import { createEventDispatcher } from "svelte";
	import CarouselDot from "./CarouselDot.svelte";
	import classes from "../../../lib/utils/classes";

	const dispatch = createEventDispatcher();

	export let pagesCount = 1;
	export let currentPageIndex = 0;

	const { class: className, ...restProps } = $$restProps;
</script>

<div
	class={classes("h-6 flex flex-wrap items-center justify-center px-8", className)}
	{...restProps}
>
	{#each Array(pagesCount) as _, pageIndex (pageIndex)}
		<div class="flex h-6 w-6 items-center justify-center">
			<CarouselDot
				active={currentPageIndex === pageIndex}
				on:click={() => dispatch("pageChange", pageIndex)}
			/>
		</div>
	{/each}
</div>
