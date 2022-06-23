<script>
	import { emailRegex } from "./../../../lib/constants/regex.js";
	import Modal from "./../../elements/Modal/Modal.svelte";
	import FormButton from "../../forms/FormButton/FormButton.svelte";
	import FloppyDisk from "phosphor-svelte/lib/FloppyDisk";
	import PaintBrushHousehold from "phosphor-svelte/lib/PaintBrushHousehold";
	import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
	import classes from "../../../lib/utils/classes";
	import TextField from "../../forms/TextField/TextField.svelte";
	import TextAreaField from "../../forms/TextAreaField/TextAreaField.svelte";
	import SelectField from "../../forms/SelectField/SelectField.svelte";
	import { CheckCircle } from "phosphor-svelte";

	const { class: className, ...restProps } = $$restProps;

	let errors = {};
	let values = {
		name: "",
		email: "",
		message: "",
		subject: "",
	};

	let hasErrors = false;

	function checkErrors(_errors) {
		for (const error of Object.values(_errors)) {
			if (typeof error === "string") return true;
		}

		return false;
	}

	$: hasErrors = checkErrors(errors);

	let subjects = ["Sugestões", "Reclamações", "Financeiro", "Suporte", "Elogios", "Outros"];
	let modalOpen = false;

	function onSubmit() {
		modalOpen = true;
	}

	function onClose() {
		modalOpen = false;
	}

	function validateName(value) {
		if (!value) return "Forneça um nome";
		return undefined;
	}

	function validateEmail(value) {
		if (!value) return "Forneça um email";

		if (!value.match(emailRegex)) return "Email inválido";

		return undefined;
	}

	function validateSubject(value) {
		if (!value) return "Forneça uma assunto";

		return undefined;
	}

	function validateMessage(value) {
		if (!value) return "Forneça uma mensagem";

		return undefined;
	}

	$: errors.name = validateName(values.name);
	$: errors.email = validateEmail(values.email);
	$: errors.subject = validateSubject(values.subject);
	$: errors.message = validateMessage(values.message);
</script>

<div class={classes("mt-5 max-w-xl", className)} {...restProps}>
	<form
		class="highlight-white items-center justify-center gap-x-4 gap-y-8 rounded-xl bg-gray-600 p-5"
		on:submit|preventDefault={onSubmit}
	>
		<fieldset class="flex flex-col items-center justify-center">
			<div class="flex flex-col gap-4 sm:flex-row">
				<TextField
					class="w-full sm:w-1/3"
					{errors}
					name="name"
					label="Nome"
					bind:value={values.name}
				/>
				<TextField
					class="w-full sm:w-1/3"
					{errors}
					name="email"
					label="Email"
					bind:value={values.email}
				/>

				<SelectField
					class="w-full sm:w-1/3"
					{errors}
					name="subject"
					label="Assunto"
					options={subjects}
					bind:value={values.subject}
				/>
			</div>

			<TextAreaField
				{errors}
				class="mt-5 w-full"
				name="message"
				label="Mensagem"
				bind:value={values.message}
			/>
		</fieldset>

		<div class="mt-4 flex flex-col gap-4 sm:flex-row">
			<FormButton class="w-1/3" type="submit" color="green" let:hovering disabled={hasErrors}>
				<PaperPlaneTilt class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
				Enviar
			</FormButton>
			<FormButton class="w-1/3" type="button" color="sky" let:hovering>
				<FloppyDisk class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
				Salvar
			</FormButton>
			<FormButton
				class="w-1/3"
				type="reset"
				color="amber"
				let:hovering
				on:click={() => (values = {})}
			>
				<PaintBrushHousehold class="h-5 w-5" weight={hovering ? "fill" : "bold"} />
				Resetar
			</FormButton>
		</div>
	</form>
</div>

<Modal open={modalOpen} {onClose}>
	<div class="flex flex-col items-center justify-center p-5">
		<CheckCircle class="h-14 w-14 text-green-500" weight="bold" />
		<p class="mt-4 mb-2 text-lg font-medium">Formulário enviado com sucesso!</p>
		<div class="rounded-xl bg-gray-800 p-4">
			<pre>{JSON.stringify(values, null, 2)}</pre>
		</div>
	</div>
</Modal>
