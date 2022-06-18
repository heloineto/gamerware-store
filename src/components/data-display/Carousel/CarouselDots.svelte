<script>
	import { createEventDispatcher } from 'svelte';
	import CarouselDot from './CarouselDot.svelte';
	import clsx from 'clsx';

	const dispatch = createEventDispatcher();

	export let pagesCount = 1;
	export let currentPageIndex = 0;

	const { class: className, ...restProps } = $$restProps;
</script>

<div
	class={clsx('h-dots w-dots flex flex-wrap items-center justify-center px-8', className)}
	{...restProps}
>
	{#each Array(pagesCount) as _, pageIndex (pageIndex)}
		<div class="flex items-center justify-center">
			<CarouselDot
				active={currentPageIndex === pageIndex}
				on:click={() => dispatch('pageChange', pageIndex)}
			/>
		</div>
	{/each}
</div>

<style>
	.h-dots {
		height: calc(var(--h-carousel-dot) + 0.875rem);
	}

	.w-dots {
		width: calc(var(--w-carousel-dot) + 0.625rem);
	}
</style>
