<script>
	import GameController from 'phosphor-svelte/lib/GameController';
	import ShoppingCart from 'phosphor-svelte/lib/ShoppingCart';
	import NavbarItem from './NavbarItem.svelte';
</script>

<div class="pt-4">
	<nav
		class="mx-4 flex h-16 items-center justify-between rounded-xl border border-solid border-gray-500 bg-gray-600 p-2"
		aria-label="superior"
	>
		<div>
			<a
				href="/"
				class="flex items-center justify-center rounded-xl bg-gray-700 p-2 hover:bg-gray-800"
			>
				<GameController class="h-7 w-7" />
			</a>
		</div>
		<div class="flex h-full gap-3">
			<NavbarItem href="/">Início</NavbarItem>
			<NavbarItem href="/products">Produtos</NavbarItem>
			<NavbarItem href="/contact">Entre em contato</NavbarItem>
			<NavbarItem href="/register">Cadastre-se</NavbarItem>
		</div>
		<div class="">
			<a
				class="flex items-center justify-center gap-2 rounded-xl bg-gray-700 p-2 hover:bg-gray-800"
				href="/cart"
			>
				<ShoppingCart class="h-7 w-7" />
				<span class="font-medium">2</span>
			</a>
		</div>
	</nav>
</div>

<style>
</style>
