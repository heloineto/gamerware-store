<script>
	import { Plus } from "phosphor-svelte";

	import Button from ".../elements/Button";
	import cart from "../../../lib/stores/cart";

	export let product;

	var formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	let { key, price, name } = product;
	let priceDisplay = formatter.format(price);
</script>

<div class="product" on:click>
	<p>{name}</p>
	<img src="/product-images/{key}.jpg" alt="computador {key + 1}" height="200" width="200" />
	<div>
		<h4>Informações</h4>
		<p>Nome: {name}</p>
		<p>Preço: {priceDisplay}</p>
	</div>
	<div>
		<Button
			class="h-14 w-14 !rounded-full"
			color="gray"
			on:click={(event) => {
				event.stopPropagation();

				cart.update((_cart) => {
					return { products: [..._cart.products, product] };
				});
			}}
		>
			<Plus size={32} weight="bold" />
		</Button>
	</div>
</div>

<style>
	.product {
		text-align: center;
		background-color: #ffffff;
		border: 4px ridge #97a2c7;
		color: #0f172a;
		width: 100%;
		padding: 20px;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: right;
		align-items: center;
		vertical-align: top;
	}
</style>
