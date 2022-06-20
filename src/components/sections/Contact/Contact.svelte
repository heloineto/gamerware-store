<script>
	import ContactButton from "./ContactButton.svelte";
	import FloppyDisk from "phosphor-svelte/lib/FloppyDisk";
	import PaintBrushHousehold from "phosphor-svelte/lib/PaintBrushHousehold";
	import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
	import clsx from "clsx";
	import TextField from "../../forms/TextField/TextField.svelte";

	const { class: className, ...restProps } = $$restProps;

	let name = "";
	let email = "";
</script>

<div class={clsx("mt-5", className)} {...restProps}>
	<div
		class="highlight-white grid grid-cols-12 items-center justify-center gap-x-4 gap-y-8 rounded-xl bg-gray-600 p-5"
	>
		<TextField class="col-span-4" name="name" label="Nome" bind:value={name} />
		<TextField class="col-span-4" name="email" label="Email" bind:value={email} />
		<TextField class="col-span-4" name="subject" label="Assunto" />
		<ContactButton class="col-span-2 col-start-4" type="submit" color="green" let:hovering>
			<PaperPlaneTilt class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Enviar
		</ContactButton>
		<ContactButton class="col-span-2" color="sky" let:hovering>
			<FloppyDisk class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Salvar
		</ContactButton>
		<ContactButton class="col-span-2" type="reset" color="amber" let:hovering>
			<PaintBrushHousehold class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
			Resetar
		</ContactButton>
	</div>
</div>
