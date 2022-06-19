<script>
	import GameController from "phosphor-svelte/lib/GameController";
	import ShoppingCart from "phosphor-svelte/lib/ShoppingCart";
	import Button from "../../elements/Button/Button.svelte";
	import NavbarItem from "./NavbarItem.svelte";
</script>

<div class="flex h-[var(--h-navbar)] flex-col pt-4">
	<nav
		class="mx-8 flex items-center justify-between rounded-xl border border-solid border-gray-500 bg-gray-600 p-2"
		aria-label="superior"
	>
		<div>
			<Button as="a" href="/" class="p-2">
				<GameController class="h-7 w-7" />
			</Button>
		</div>
		<div class="flex h-full gap-3">
			<NavbarItem href="/">Início</NavbarItem>
			<NavbarItem href="/products">Produtos</NavbarItem>
			<NavbarItem href="/contact">Entre em contato</NavbarItem>
			<NavbarItem href="/register">Cadastre-se</NavbarItem>
		</div>
		<div class="">
			<Button as="a" href="/cart" class="gap-2 p-2">
				<ShoppingCart class="h-7 w-7" />
				<span class="font-medium">2</span>
			</Button>
		</div>
	</nav>
</div>

<style>
	:root {
		--h-navbar: 5rem;
	}
</style>
