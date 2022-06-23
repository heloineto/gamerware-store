<script>
	import TextField from "./../../forms/TextField/TextField.svelte";
	import Button from "./../../elements/Button";
	import cupon from "../../../lib/stores/cupon";

	let value = "";

	function onSubmit() {
		if (value.toUpperCase() === "UTFPR") {
			cupon.set(value);
		}
	}
</script>

<div class="highlight-white rounded-xl bg-gray-600 p-5 shadow-xl lg:p-8">
	<h2 class="text-lg font-medium text-gray-100">Cupon de desconto</h2>

	<form class="mt-4 flex gap-5" on:submit|preventDefault={onSubmit}>
		<TextField name="cupon" label="Código do Cupon" class="w-2/3" bind:value />

		<Button as="button" type="submit" color="cyan" class="w-1/3 py-2 px-4 font-medium">
			Aplicar
		</Button>
	</form>
</div>
