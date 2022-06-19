<script>
	import FooterColumn from "./FooterColum.svelte";
	import FooterItem from "./FooterItem.svelte";
	import FooterSocials from "./FooterSocials.svelte";
</script>

<footer
	class="mt-auto flex flex-col items-center justify-center border-t-2 border-gray-700 bg-gray-900"
	aria-label="rodapé"
>
	<FooterSocials />
	<div class="grid grid-cols-2 gap-4 py-8 px-8">
		<FooterColumn title="SAC">
			<FooterItem>Email: atendimento@gamerware.com</FooterItem>
			<FooterItem>Telefone: (00) 0000-0000</FooterItem>
		</FooterColumn>

		<FooterColumn title="Informações">
			<FooterItem>CNPJ: 00.000.000/000-00</FooterItem>
			<FooterItem>
				R. Doutor Washington Subtil Chueire, 330 - Jardim Carvalho, Ponta Grossa - PR, 84017-220
			</FooterItem>
		</FooterColumn>
	</div>
	<p class="my-4 text-sm font-semibold uppercase text-gray-500">&copy; 2022 Gamerware</p>
</footer>
