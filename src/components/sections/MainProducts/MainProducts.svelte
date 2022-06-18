<script>
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';

	import Button from '../../elements/Button/Button.svelte';
</script>

<section class="mx-8 flex flex-col pt-4 pb-12" aria-label="produtos principais">
	<header class="h-40">
		<h2 class="my-8 text-4xl font-bold">Principais Computadores</h2>
		<Button
			as="a"
			href="/products"
			color="green"
			class="group w-36 !justify-start gap-2 py-2 px-4 !text-green-200"
		>
			Ver todos
			<ArrowRight
				aria-hidden="true"
				class="h-5 w-5 transition-transform group-hover:translate-x-1.5"
			/>
		</Button>
	</header>
	<div class="main-products__products">
		<!-- <div class="main-products__product">
			<img
				class="main-products__product__image"
				height="500"
				width="500"
				src="public/product-images/0.jpg"
				alt="computador 0"
			/>
			<h3 class="main-products__product__heading"><a href="#">Computador 0</a></h3>
			<p class="main-products__product__price">R$ 2.000,00</p>
		</div>
		<div class="main-products__product">
			<img
				class="main-products__product__image"
				height="500"
				width="500"
				src="public/product-images/1.jpg"
				alt="computador 1"
			/>
			<h3 class="main-products__product__heading"><a href="#">Computador 1</a></h3>
			<p class="main-products__product__price">R$ 3.000,00</p>
		</div>
		<div class="main-products__product">
			<img
				class="main-products__product__image"
				height="500"
				width="500"
				src="public/product-images/2.jpg"
				alt="computador 2"
			/>
			<h3 class="main-products__product__heading"><a href="#">Computador 2</a></h3>
			<p class="main-products__product__price">R$ 4.000,00</p>
		</div> -->
	</div>
</section>
