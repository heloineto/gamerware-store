<script>
	import Modal from "./../components/elements/Modal/Modal.svelte";
	import Button from "../components/elements/Button";
	import Product from "../components/Product.svelte";
	import products from "../lib/constants/products";

	let sortedProducts = products;

	let sortedName = products.slice().sort(function (a, b) {
		var keyA = a.name;
		var keyB = b.name;
		// Compare the 2 dates
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	let sortedPrice = products.slice().sort(function (a, b) {
		var keyA = a.price;
		var keyB = b.price;
		// Compare the 2 dates
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	let modalOpen = false;
	let selectedProduct;
</script>

<Modal open={modalOpen} onClose={() => (modalOpen = false)}>
	<Product product={selectedProduct} />
</Modal>

<main>
	<div class="mt-4 flex items-center gap-3">
		Order por:
		<Button class="px-3 py-2" color="yellow" on:click={() => (sortedProducts = products)}>
			Normal
		</Button>
		<Button class="px-3 py-2" color="blue" on:click={() => (sortedProducts = sortedName)}>
			Nome
		</Button>
		<Button class="px-3 py-2" color="green" on:click={() => (sortedProducts = sortedPrice)}>
			Preço
		</Button>
	</div>
	<div class="products">
		{#each sortedProducts as product (product.key)}
			<Product
				{product}
				on:click={() => {
					modalOpen = true;
					selectedProduct = product;
				}}
			/>
		{/each}
	</div>
</main>

<style>
	.products {
		display: grid;
		margin: 20px;
		gap: 10px;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 984px) {
		.products {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 768px) {
		.products {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 450px) {
		.products {
			grid-template-columns: 1fr;
		}
	}
</style>
