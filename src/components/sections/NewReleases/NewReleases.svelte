<script>
	import Carousel from "../../data-display/Carousel";
</script>

<section class="mx-8" aria-label="slider">
	<Carousel containerClass="rounded-lg border border-gray-700">
		{#each Array(4) as _, index (index)}
			<img
				class="h-full w-full object-cover"
				src="/carousel-images/{index}.jpg"
				alt="gaming computer"
			/>
		{/each}
	</Carousel>
</section>
