<script>
	import { FloppyDisk, PaintBrushHousehold, PaperPlaneTilt } from "phosphor-svelte";

	import FormButton from "../components/forms/FormButton/FormButton.svelte";
	import Header from "../components/sections/Header/Header.svelte";
	import Input from "../form/Input.svelte";
	import { portal } from "../lib/actions/portal";
	import states from "../lib/constants/states";

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

	function validateEmail(email) {
		if (!email) return "Forneça um Email";

		return undefined;
	}

	function validatePassword(password) {
		if (!password) return "Forneça uma senha";

		return undefined;
	}

	$: {
		values.cpf = onlyNumbers(values.cpf);

		errors.cpf = validateCPF(values.cpf);
	}
	$: {
		values.cep = onlyNumbers(values.cep);

		errors.cep = validateCEP(values.cep);
	}

	function onSubmit() {}
</script>

<svelte:head>
	<title>Cadastro - Gamerware</title>
</svelte:head>

<main class="m-4 md:mx-8">
	<Header key="register">Cadastro</Header>

	<div
		class="form-wrapper highlight-white mt-4 flex items-center justify-center rounded-xl bg-gray-600 p-5 shadow-xl"
	>
		<form method="post" action="">
			<fieldset>
				<legend class="form__heading">Formulário de cadastro</legend>
				<fieldset class="personal-data">
					<legend class="fieldset-legend">Dados pessoais</legend>
					<label>
						Nome:
						<input
							type="text"
							name="name"
							placeholder="Fulano da Silva"
							maxlength="50"
							bind:value={values.name}
						/>
					</label>
					<label>
						E-mail:
						<input
							type="email"
							name="email"
							placeholder="email@dominio.zzz"
							bind:value={values.email}
						/>
					</label>
					<label>
						Senha:
						<input type="password" name="password" bind:value={values.password} />
					</label>
					<Input
						label="CPF"
						{errors}
						name="cpf"
						placeholder="999.999.999-99"
						bind:value={values.cpf}
					/>
				</fieldset>
				<fieldset class="fieldset-address">
					<legend class="fieldset-legend">Endereço</legend>
					<Input label="CEP" {errors} name="cep" placeholder="99999-999" bind:value={values.cep} />
					<label>
						Estado:
						<select name="Estado" bind:value={values.state}>
							{#each states as state}
								<option value={state}>{state}</option>
							{/each}
						</select>
					</label>
					<label>
						Cidade: <input type="text" name="cidade" bind:value={values.city} />
					</label>
					<label>
						Rua: <input type="text" name="rua" bind:value={values.street} />
					</label>
					<label>
						Número: <input type="number" name="numero" bind:value={values.number} />
					</label>
					<label>
						Complementos:
						<input
							id="input__complementos"
							type="text"
							name="complementos"
							placeholder="Apartamento, ponto de referência ..."
							bind:value={values.complements}
						/>
					</label>
				</fieldset>
				<div class="form__buttons">
					<FormButton
						class="col-span-2 col-start-4"
						type="submit"
						color="green"
						let:hovering
						disabled={true}
					>
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

<style>
	:root {
		--gray-50: #f8fafc;
		--gray-100: #f1f5f9;
		--gray-200: #e2e8f0;
		--gray-300: #cbd5e1;
		--gray-400: #94a3b8;
		--gray-500: #64748b;
		--gray-600: #475569;
		--gray-700: #334155;
		--gray-800: #1e293b;
		--gray-900: #0f172a;

		--green-50: #f7fee7;
		--green-100: #ecfccb;
		--green-200: #d9f99d;
		--green-300: #bef264;
		--green-400: #a3e635;
		--green-500: #84cc16;
		--green-600: #65a30d;
		--green-700: #4d7c0f;
		--green-800: #3f6212;
		--green-900: #365314;

		--text-xs: 0.75rem;
		--text-sm: 0.875rem;
		--text-base: 1rem;
		--text-lg: 1.125rem;
		--text-xl: 1.25rem;
		--text-2xl: 1.5rem;
		--text-3xl: 1.875rem;
		--text-4xl: 2.25rem;
		--text-5xl: 3rem;
		--text-6xl: 3.75rem;
		--text-7xl: 4.5rem;
		--text-8xl: 6rem;
		--text-9xl: 8rem;
	}

	.form-wrapper {
		padding: 25px;
		border-radius: 15px;
	}

	.fieldset {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.form__heading {
		font-size: x-large;
		margin-left: auto;
		margin-right: auto;
		font-weight: 600;
	}

	.form__buttons {
		display: flex;
		gap: 20px;
	}

	input,
	select,
	textarea {
		color: var(--gray-900);
	}

	.left-aligned {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 10px;
		margin-top: 20px;
	}

	.personal-data {
		border-bottom: medium solid var(--gray-600);
		padding-bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.fieldset-address {
		border-bottom: medium solid var(--gray-600);
		padding-bottom: 16px;
		margin-bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.fieldset-legend {
		font-size: large;
		font-weight: 600;
		padding-top: 16px;
		padding-bottom: 8px;
	}

	#input__complementos {
		width: calc(100% - 8rem);
	}

	@media (max-width: 768px) {
		body {
			background-color: lightblue;
		}
	}
</style>
