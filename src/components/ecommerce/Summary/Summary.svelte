<script>
	import cart, { getMoneyTotal } from "../../../lib/stores/cart";
	import Button from "./../../elements/Button";
	import SummaryItem from "./SummaryItem.svelte";
	import cupon from "../../../lib/stores/cupon";

	let total = 0;
	$: total = getMoneyTotal($cart);
</script>

<div class="highlight-white rounded-xl bg-gray-600 p-5 shadow-xl lg:p-8">
	<h2 class="text-lg font-medium text-gray-100">Resumo do compra</h2>

	<dl class="mt-6">
		<div class="divide-y divide-gray-400">
			{#each Object.entries($cart) as [key, { product: { price, name }, amount }] (key)}
				<SummaryItem
					title={name}
					{amount}
					description={(price * amount).toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				/>
			{/each}
		</div>

		<div class="border-t border-gray-200 pt-2" />
		<SummaryItem
			title="Subtotal"
			description={total.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			})}
		/>

		{#if $cupon !== null}
			{cupon}
		{/if}

		<div class="flex items-center justify-between">
			<dt class="text-base font-medium text-gray-100">Total</dt>
			<dd class="text-base font-medium text-gray-100">
				{total.toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})}
			</dd>
		</div>
	</dl>

	<Button as="button" type="submit" color="green" class="mt-6 w-full py-3 px-4 font-medium">
		Comprar
	</Button>
</div>
