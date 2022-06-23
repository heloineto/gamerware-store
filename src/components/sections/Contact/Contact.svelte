<script>
	import FormButton from "../../forms/FormButton/FormButton.svelte";
	import FloppyDisk from "phosphor-svelte/lib/FloppyDisk";
	import PaintBrushHousehold from "phosphor-svelte/lib/PaintBrushHousehold";
	import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
	import classes from "../../../lib/utils/classes";
	import TextField from "../../forms/TextField/TextField.svelte";

	const { class: className, ...restProps } = $$restProps;

	let values = {
		name: "",
		email: "",
	};

	function onSubmit() {
		console.log("THE FORM WAS SUBMITED!");
		console.log("Here are the values:", values);

		// TODO: validate fields
	}
</script>

<div class={classes("mt-5", className)} {...restProps}>
	<form
		class="highlight-white grid grid-cols-12 items-center justify-center gap-x-4 gap-y-8 rounded-xl bg-gray-600 p-5"
		on:submit={onSubmit}
	>
		<TextField class="col-span-4" name="name" label="Nome" bind:value={values.name} />
		<TextField class="col-span-4" name="email" label="Email" bind:value={values.email} />
		<!-- <TextField class="col-span-4" name="subject" label="Assunto" /> -->
		<FormButton class="col-span-2 col-start-4" type="submit" color="green" let:hovering>
			<PaperPlaneTilt class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Enviar
		</FormButton>
		<FormButton class="col-span-2" type="button" color="sky" let:hovering>
			<FloppyDisk class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Salvar
		</FormButton>
		<FormButton class="col-span-2" type="reset" color="amber" let:hovering>
			<PaintBrushHousehold class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Resetar
		</FormButton>
	</form>
</div>

<pre>
	{JSON.stringify(values, null, 2)}
</pre>
