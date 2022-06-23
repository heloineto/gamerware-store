<script>
	import Header from "../components/sections/Header/Header.svelte";

	import Cart from "./../components/ecommerce/Cart";
</script>

<svelte:head>
	<title>Carrinho - Gamerware</title>
</svelte:head>

<main class="m-4 md:mx-8">
	<Header key="cart">Carrinho de Compras</Header>

	<Cart />
</main>
