<script>
	import Plus from "phosphor-svelte/lib/Plus";
	import Minus from "phosphor-svelte/lib/Minus";
	import Trash from "phosphor-svelte/lib/Trash";
	import Button from "../../elements/Button";
	import cart from "../../../lib/stores/cart";
	import classes from "../../../lib/utils/classes";

	export let product;
	export let amount = undefined;
	export let removeButton = false;
	export let deleteButton = false;

	var formatter = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	let { key, price, name } = product;
	let priceDisplay = formatter.format(price);

	const { class: className, ...restProps } = $$restProps;
</script>

<div class={classes("product relative", className)} on:click {...restProps}>
	<p>{name}</p>
	<img src="/product-images/{key}.jpg" alt="computador {key + 1}" height="200" width="200" />
	<div>
		<h4>Informações</h4>
		<p>Nome: {name}</p>
		<p>Preço: {priceDisplay}</p>
	</div>
	<div class="mt-2 flex items-center gap-4">
		{#if removeButton}
			<Button
				class="h-10 w-10 !rounded-full"
				color="orange"
				on:click={(event) => {
					event.stopPropagation();
					cart.removeProduct(product);
				}}
			>
				<Minus class="h-6 w-8" weight="bold" />
			</Button>
		{/if}
		{#if amount !== undefined}
			<p class="text-xl font-bold">
				{amount}
			</p>
		{/if}
		<Button
			class="h-10 w-10 !rounded-full"
			color="green"
			on:click={(event) => {
				event.stopPropagation();
				cart.addProduct(product);
			}}
		>
			<Plus class="h-6 w-6" weight="bold" />
		</Button>
	</div>
	{#if deleteButton}
		<Button
			class="absolute top-5 right-5 h-10 w-10 !rounded-full"
			color="red"
			on:click={(event) => {
				event.stopPropagation();
				cart.deleteProduct(product);
			}}
		>
			<Trash class="h-6 w-8" weight="bold" />
		</Button>
	{/if}
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
