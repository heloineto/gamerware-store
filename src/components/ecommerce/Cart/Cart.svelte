<script>
	import cart from "../../../lib/stores/cart";
	import Coupons from "../Coupons/Coupons.svelte";
	import Product from "../Product";

	import Summary from "../Summary";
</script>

<div class="gap-y-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-4">
	<section
		class="highlight-white flex flex-col gap-4 rounded-xl bg-gray-600 p-5 shadow-xl lg:col-span-7 lg:p-8"
	>
		{#each Object.entries($cart) as [key, { product, amount }] (key)}
			<Product {product} {amount} removeButton={true} deleteButton={true} />
		{/each}
	</section>
	<section class="mt-16 flex flex-col gap-4 lg:col-span-5 lg:mt-0">
		<Coupons />
		<Summary />
	</section>
</div>
