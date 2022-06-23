<script>
	import { CheckCircle, FloppyDisk, PaintBrushHousehold, PaperPlaneTilt } from "phosphor-svelte";

	import FormButton from "../components/forms/FormButton/FormButton.svelte";
	import Header from "../components/sections/Header/Header.svelte";
	import Input from "../components/forms/Input.svelte";
	import { portal } from "../lib/actions/portal";
	import states from "../lib/constants/states";
	import TextField from "../components/forms/TextField";
	import { emailRegex } from "../lib/constants/regex";
	import PasswordField from "../components/forms/PasswordField/PasswordField.svelte";
	import Modal from "../components/elements/Modal/Modal.svelte";
	import SelectField from "../components/forms/SelectField/SelectField.svelte";

	let values = {
		name: "",
		email: "",
		password: "",
		cpf: "",
		cep: "",
		state: "",
		city: "",
		street: "",
		number: "",
		complements: "",
	};

	let errors = {};

	let hasErrors = false;

	function checkErrors(_errors) {
		for (const error of Object.values(_errors)) {
			if (typeof error === "string") return true;
		}

		return false;
	}

	$: hasErrors = checkErrors(errors);

	function onlyNumbers(str) {
		if (!str) return str;

		return str.replace(/[^0-9.-]/g, "");
	}

	function validateCPF(cpf) {
		if (!cpf) return "Forneça um CPF";

		if (!cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) return "CPF inválido";

		return undefined;
	}

	function validateCEP(cep) {
		if (!cep) return "Forneça um CEP";

		if (!cep.match(/^[0-9]{5}-[0-9]{3}$/)) return "CEP inválido";

		return undefined;
	}

	function validateName(name) {
		if (!name) return "Forneça um Nome";

		return undefined;
	}

	function validatePassword(password) {
		if (!password) return "Forneça uma senha";

		return undefined;
	}

	function validateEmail(value) {
		if (!value) return "Forneça um email";

		if (!value.match(emailRegex)) return "Email inválido";

		return undefined;
	}

	function validateState(value) {
		if (!value) return "Forneça uma estado";

		return undefined;
	}
	function validateCity(value) {
		if (!value) return "Forneça uma cidade";

		return undefined;
	}
	function validateStreet(value) {
		if (!value) return "Forneça uma rua";

		return undefined;
	}
	function validateNumber(value) {
		if (!value) return "Forneça uma número";

		return undefined;
	}

	$: errors.name = validateName(values.name);
	$: errors.email = validateEmail(values.email);
	$: errors.password = validatePassword(values.password);
	$: errors.state = validateState(values.state);
	$: errors.city = validateCity(values.city);
	$: errors.street = validateStreet(values.street);
	$: errors.number = validateNumber(values.number);

	$: {
		values.cpf = onlyNumbers(values.cpf);

		errors.cpf = validateCPF(values.cpf);
	}
	$: {
		values.cep = onlyNumbers(values.cep);

		errors.cep = validateCEP(values.cep);
	}

	let modalOpen = false;

	function onSubmit() {
		modalOpen = true;
	}

	function onClose() {
		modalOpen = false;
	}
</script>

<svelte:head>
	<title>Cadastro - Gamerware</title>
</svelte:head>

<main class="m-4 md:mx-8">
	<Header key="register">Cadastro</Header>

	<div class="flex items-center justify-center">
		<form
			class="highlight-white mt-4 flex max-w-xl items-center justify-center rounded-xl bg-gray-600 p-5 shadow-xl"
			on:submit|preventDefault={onSubmit}
		>
			<fieldset>
				<fieldset class="flex flex-col gap-2">
					<legend class="my-2 text-lg font-medium">Dados pessoais</legend>
					<div class="flex gap-4">
						<TextField {errors} name="name" label="Nome" bind:value={values.name} />
						<TextField {errors} name="email" label="Email" bind:value={values.email} />
						<PasswordField {errors} name="password" label="Senha" bind:value={values.password} />
					</div>

					<TextField label="CPF" {errors} name="cpf" bind:value={values.cpf} />
				</fieldset>
				<fieldset class="flex flex-col gap-2 border-t">
					<legend class="my-2 text-lg font-medium">Endereço </legend>
					<TextField label="CEP" {errors} name="cep" bind:value={values.cep} />
					<SelectField
						{errors}
						name="state"
						label="Estado"
						options={states}
						bind:value={values.state}
					/>
					<TextField label="Cidade" {errors} name="city" bind:value={values.city} />
					<TextField label="Rua" {errors} name="street" bind:value={values.street} />
					<TextField label="Número" {errors} name="number" bind:value={values.number} />
					<TextField
						label="Complementos"
						{errors}
						name="complements"
						bind:value={values.complements}
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
			</fieldset>
		</form>
	</div>
</main>

<div class="absolute top-5 left-5 h-80 w-40 rounded-xl bg-blue-900 text-sm" use:portal={"root"}>
	<pre>
    {JSON.stringify(values, null, 2)}
  </pre>
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
