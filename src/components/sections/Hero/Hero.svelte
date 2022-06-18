<script>
	import { ArrowRight } from 'phosphor-svelte';

	import Button from '../../elements/Button/Button.svelte';
</script>

<div class="grid grid-cols-12 gap-8 self-center px-8">
	<div class="col-span-6 mb-20 flex flex-col">
		<h1 class="mb-4 text-5xl font-extrabold">Computadores Gamer de Alta Performance</h1>
		<p class="mb-8 text-lg font-medium text-gray-400">
			Compre seu PC Gamer com placas de vídeo e processadores top de linha na Gamerware! Encontre as
			melhores ofertas aqui.
		</p>
		<Button as="a" href="/products" color="lime" class="group flex items-start justify-start">
			Ver Computadores
			<ArrowRight aria-hidden="true" class="h-5 w-5 group-hover:ml-2" />
		</Button>
	</div>
	<img class="hero__image col-span-6" src="/hero-image.jpg" alt="hero" />
</div>
