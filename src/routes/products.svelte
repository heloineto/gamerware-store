<script>
	import Header from "./../components/sections/Header/Header.svelte";
	import Modal from "./../components/elements/Modal/Modal.svelte";
	import Button from "../components/elements/Button";
	import Product from "../components/ecommerce/Product";
	import products from "../lib/constants/products";

	let sortedProducts = products;

	let sortedName = products.slice().sort(function (a, b) {
		let keyA = a.name;
		let keyB = b.name;

		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	let sortedPrice = products.slice().sort(function (a, b) {
		let keyA = a.price;
		let keyB = b.price;

		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	let modalOpen = false;
	let selectedProduct;
</script>

<svelte:head>
	<title>Produtos - Gamerware</title>
</svelte:head>

<Modal open={modalOpen} onClose={() => (modalOpen = false)}>
	<Product product={selectedProduct} />
</Modal>

<main class="m-4 md:mx-8">
	<Header key="products">Computadores</Header>
	<div class="mt-4 flex items-center gap-3">
		Ordenar por:
		<Button class="w-32 px-3 py-2" color="yellow" on:click={() => (sortedProducts = products)}>
			Normal
		</Button>
		<Button class="w-32 px-3 py-2" color="blue" on:click={() => (sortedProducts = sortedName)}>
			Nome
		</Button>
		<Button class="w-32 px-3 py-2" color="green" on:click={() => (sortedProducts = sortedPrice)}>
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
		margin: 20px 0;
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
