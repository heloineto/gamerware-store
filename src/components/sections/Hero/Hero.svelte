<script>
	import { ArrowRight } from "phosphor-svelte";

	import Button from "../../elements/Button/Button.svelte";
</script>

<div
	class="grid h-[calc(100vh-var(--h-navbar))] min-h-[600px] flex-grow grid-cols-12 gap-8 self-center p-8"
>
	<div class="col-span-6 mb-20 flex flex-col justify-center">
		<p class="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-200">Gamerware Store</p>
		<h1 class="-ml-1 mb-4 text-5xl font-extrabold leading-tight">
			<span class="text-green-500">Computadores Gamer</span>
			de Alta Performance
		</h1>
		<p class="mb-8 text-lg leading-relaxed text-gray-300">
			Compre seu PC Gamer com placas de vídeo e processadores top de linha na Gamerware! Encontre as
			melhores ofertas aqui.
		</p>
		<Button
			as="a"
			href="/products"
			color="green"
			class="group w-52 !justify-start gap-2 py-2 px-4 !text-green-200"
		>
			Ver Computadores
			<ArrowRight
				aria-hidden="true"
				class="h-5 w-5 transition-transform group-hover:translate-x-1.5"
			/>
		</Button>
	</div>
	<img
		class="col-span-6 h-full rounded-lg border border-gray-700 object-cover"
		src="/hero-image.jpg"
		alt="hero"
	/>
</div>
