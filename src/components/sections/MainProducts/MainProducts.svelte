<script>
	import ArrowRight from "phosphor-svelte/lib/ArrowRight";
	import products from "../../../lib/constants/products";
	import Product from "../../ecommerce/Product";

	import Button from "../../elements/Button/Button.svelte";
</script>

<section class="mx-8 flex flex-col pt-4 pb-12" aria-label="produtos principais">
	<header>
		<h2 class="my-8 text-3xl font-bold sm:text-4xl">Principais Computadores</h2>
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
	<div class="relative grid flex-grow grid-cols-12 gap-4 py-8">
		<Product class="col-span-12 sm:col-span-4" product={products[0]} />
		<Product class="col-span-12 sm:col-span-4" product={products[1]} />
		<Product class="col-span-12 sm:col-span-4" product={products[2]} />
	</div>
</section>
