<script>
	import { onDestroy, onMount, tick, createEventDispatcher } from 'svelte';
	import CarouselDots from './CarouselDots.svelte';
	import CarouselArrow from './CarouselArrow.svelte';
	import clsx from 'clsx';
	// import { swipeable } from '../../actions/swipeable';
	// import { hoverable } from '../../actions/hoverable';
	// import { tappable } from '../../actions/tappable';
	// import { applyParticleSizes, createResizeObserver } from '../../utils/page';
	// import { getClones, applyClones } from '../../utils/clones';
	// import { get, switcher } from '../../utils/object';
	export let containerClass;

	let currentPageIndex = 0;
	let offset = 0;
	let durationMs = 0;
	let pagesCount = 1;

	const { class: classNames, ...restProps } = $$restProps;

	function showPrevPage() {}

	function showNextPage() {}

	function changePage(pageIndex) {
		console.log(pageIndex);
	}
</script>

<div class={clsx('flex w-full flex-col items-center', classNames)} {...restProps}>
	<div class="relative box-border flex h-[30rem] w-full overflow-hidden">
		<CarouselArrow
			class="absolute left-0 h-full"
			direction="PREV"
			disabled={currentPageIndex === 0}
			on:click={showPrevPage}
		/>

		<div
			class={clsx('sc-carousel__pages-container w-full overflow-hidden', containerClass)}
			style="
          transform: translateX({offset}px);
          transition-duration: {durationMs}ms;
          transition-timing-function: ease-in-out;
        "
		>
			<slot />
		</div>

		<CarouselArrow
			class="absolute right-0 h-full"
			direction="NEXT"
			disabled={currentPageIndex === pagesCount - 1}
			on:click={showNextPage}
		/>
	</div>

	<CarouselDots class="mt-3" {pagesCount} {currentPageIndex} on:pageChange={changePage} />
</div>
