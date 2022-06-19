<script>
	import { onDestroy, onMount, tick, createEventDispatcher } from "svelte";
	import CarouselDots from "./CarouselDots.svelte";
	import CarouselArrow from "./CarouselArrow.svelte";
	import clsx from "clsx";
	import mutation from "../../../lib/actions/mutation";
	import resize from "../../../lib/actions/resize";
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
	let pageWidth;
	let container;
	let pages;

	const { class: classNames, ...restProps } = $$restProps;

	function gotoPrevPage() {
		if (currentPageIndex === 0) return;
		changePage(currentPageIndex - 1);
	}

	function gotoNextPage() {
		if (currentPageIndex >= pagesCount) return;
		changePage(currentPageIndex + 1);
	}

	function changePage(pageIndex) {
		currentPageIndex = pageIndex;

		offset = pageIndex * pageWidth;
	}

	function applyPagesWidth(pages, pageWidth) {
		for (const page of pages) {
			page.style.minWidth = `${pageWidth}px`;
			page.style.maxWidth = `${pageWidth}px`;
		}
	}

	onMount(() => {
		pagesCount = pages.childElementCount;
		pageWidth = container.offsetWidth;

		applyPagesWidth(pages.children, pageWidth);
	});

	const mutationOpts = {
		childList({ target }) {
			pagesCount = target.childElementCount;
		},
	};

	function onResize() {
		pageWidth = container.offsetWidth;
		applyPagesWidth(pages.children, pageWidth);
	}
</script>

<div class={clsx("flex w-full flex-col items-center", classNames)} {...restProps}>
	<div
		class={clsx("relative box-border flex h-[30rem] w-full overflow-hidden", containerClass)}
		bind:this={container}
		use:resize={onResize}
	>
		<CarouselArrow
			class="absolute left-0 h-full"
			direction="PREV"
			disabled={currentPageIndex === 0}
			on:click={gotoPrevPage}
		/>

		<div
			class="flex ease-in-out"
			bind:this={pages}
			use:mutation={mutationOpts}
			style="
          transform: translateX({-offset}px);
          transition-duration: {durationMs}ms;
        "
		>
			<slot />
		</div>

		<CarouselArrow
			class="absolute right-0 h-full"
			direction="NEXT"
			disabled={currentPageIndex === pagesCount - 1}
			on:click={gotoNextPage}
		/>
	</div>

	<CarouselDots
		class="mt-3"
		{pagesCount}
		{currentPageIndex}
		on:pageChange={(event) => changePage(event.detail)}
	/>
</div>
