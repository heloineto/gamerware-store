<script>
	import Carousel from "../../data-display/Carousel";
</script>

<section class="" aria-label="slider">
	<Carousel containerClass="border-y border-gray-700">
		{#each Array(4) as _, index (index)}
			<img
				class="h-full w-full object-cover"
				src="/carousel-images/{index}.jpg"
				alt="gaming computer"
			/>
		{/each}
	</Carousel>
</section>
