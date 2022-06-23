<script>
	import Modal from "./../../elements/Modal/Modal.svelte";
	import cart, { getMoneyTotal } from "../../../lib/stores/cart";
	import Button from "./../../elements/Button";
	import SummaryItem from "./SummaryItem.svelte";
	import coupon from "../../../lib/stores/coupon";
	import { CheckCircle } from "phosphor-svelte";

	$: total = getMoneyTotal($cart);
	$: discount = $coupon !== null ? total * $coupon : 0;

	let modalOpen = false;
	function onCloseModal() {
		modalOpen = false;
	}

	$: cartEntries = Object.entries($cart);
</script>

<Modal open={modalOpen} onClose={onCloseModal}>
	<div class="flex flex-col items-center justify-center p-5">
		<CheckCircle class="h-14 w-14 text-green-500" weight="bold" />
		<p class="mt-4 mb-2 text-lg font-medium">Seu pedido de compra foi gerado com sucesso!</p>
		<p>Obrigado por comprar na Gamerware!</p>
	</div>
</Modal>

<div class="highlight-white rounded-xl bg-gray-600 p-5 shadow-xl lg:p-8">
	<h2 class="text-lg font-medium text-gray-100">Resumo do compra</h2>

	<dl class="mt-6">
		<div class="divide-y divide-gray-400">
			{#each cartEntries as [key, { product: { price, name }, amount }] (key)}
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

		{#if $coupon !== null}
			<SummaryItem
				title="Desconto ({$coupon * 100}%)"
				description={discount.toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})}
			/>
		{/if}

		<div class="mt-2 flex items-center justify-between">
			<dt class="text-base font-medium text-gray-100">Total</dt>
			<dd class="text-base font-medium text-gray-100">
				{(total - discount).toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})}
			</dd>
		</div>
	</dl>

	<Button
		as="button"
		type="button"
		on:click={() => {
			cart.set({});
			modalOpen = true;
		}}
		color="green"
		class="mt-6 w-full py-3 px-4 font-medium"
	>
		Comprar
	</Button>
</div>
