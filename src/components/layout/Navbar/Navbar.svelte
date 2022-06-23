<script>
	import GameController from "phosphor-svelte/lib/GameController";
	import ShoppingCart from "phosphor-svelte/lib/ShoppingCart";
	import Button from "../../elements/Button/Button.svelte";
	import Menu from "../../elements/Menu";
	import NavbarItem from "./NavbarItem.svelte";
	import cart, { getCount } from "../../../lib/stores/cart";

	$: productsCount = getCount($cart);
</script>

<div class="flex h-[var(--h-navbar)] flex-col pt-4">
	<nav
		class="mx-4 flex items-center justify-between rounded-xl border border-solid border-gray-500 bg-gray-600 p-2 md:mx-8"
		aria-label="superior"
	>
		<div class="w-32">
			<Button as="a" href="/" class="w-min p-2">
				<GameController class="h-7 w-7" />
			</Button>
		</div>
		<div class="flex h-full flex-grow items-center justify-center">
			<Menu breakpoint="lg">
				<NavbarItem href="/">Início</NavbarItem>
				<NavbarItem href="/products">Produtos</NavbarItem>
				<NavbarItem href="/contact">Entre em contato</NavbarItem>
				<NavbarItem href="/register">Cadastre-se</NavbarItem>
			</Menu>
		</div>
		<div class="w-32">
			<Button as="a" href="/cart" class="w-28 gap-2 p-2">
				<ShoppingCart class="h-7 w-7" />
				<span class="font-medium">{productsCount}</span>
			</Button>
		</div>
	</nav>
</div>

<style>
	:root {
		--h-navbar: 5rem;
	}
</style>
