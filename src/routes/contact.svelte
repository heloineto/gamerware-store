<script>
	import Header from "../components/sections/Header";
	import Contact from "../components/sections/Contact";
</script>

<svelte:head>
	<title>Contato - Gamerware</title>
</svelte:head>

<main class="m-4 md:mx-8">
	<Header class="mb-4" key="contact">Contato</Header>
	<div class="flex flex-col items-center">
		<Contact />
	</div>
</main>
