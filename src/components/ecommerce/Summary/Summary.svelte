<script>
	import cart from "../../../lib/stores/cart";
	import Button from "./../../elements/Button";
	import SummaryItem from "./SummaryItem.svelte";
</script>

<section
	class="highlight-white mt-16 rounded-xl bg-gray-600 p-5 shadow-xl lg:col-span-5 lg:mt-0 lg:p-8"
>
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

		<div class="flex items-center justify-between border-t border-gray-200 pt-4">
			<dt class="text-base font-medium text-gray-100">Total</dt>
			<dd class="text-base font-medium text-gray-100">R$ 112,32</dd>
		</div>
	</dl>

	<Button as="button" type="submit" color="green" class="mt-6 w-full py-3 px-4 font-medium">
		Checkout
	</Button>
</section>
