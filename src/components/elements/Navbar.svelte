<script>
	import GameController from 'phosphor-svelte/lib/GameController';
	import ShoppingCart from 'phosphor-svelte/lib/ShoppingCart';
</script>

<nav
	class="mx-4 flex h-16 items-center justify-between rounded-lg border border-solid border-gray-500 bg-gray-600 p-2"
	aria-label="superior"
>
	<div class="navbar__left">
		<a class="logo" href="/">
			<GameController />
		</a>
	</div>
	<div class="navbar__center">
		<div class="menu">
			<a class="menu__item" href="/">Início</a>
			<a class="menu__item" href="/products.html">Produtos</a>
			<a class="menu__item" href="/contact.html">Entre em contato</a>
			<a class="menu__item" href="/register.html">Cadastre-se</a>
		</div>
	</div>
	<div class="navbar__right">
		<!-- Shopping Cart -->
		<a class="shopping-cart" href="/cart.html">
			<ShoppingCart />
			<span class="shopping-cart__counter">2</span>
		</a>
	</div>
</nav>

<style>
</style>
