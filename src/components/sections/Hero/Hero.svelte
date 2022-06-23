<script>
	import { ArrowRight } from "phosphor-svelte";

	import Button from "../../elements/Button/Button.svelte";
</script>

<div
	class="relative grid h-[calc(100vh-var(--h-navbar))] min-h-[700px] flex-grow grid-cols-12 gap-4 self-center px-4 py-8 lg:px-8"
>
	<div
		class="absolute z-10 mb-20 flex h-full flex-col justify-center bg-gradient-to-b from-gray-800 via-gray-800/25 to-gray-800 p-4 lg:static lg:col-span-6"
	>
		<p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
			Gamerware Store
		</p>
		<h1 class="-ml-1 mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
			<span class="text-green-500">Computadores Gamer</span>
			de Alta Performance
		</h1>
		<dl
			class="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gray-300 sm:gap-6"
		>
			<dd class="flex items-center">
				<img class="mr-2 h-7 flex-none" src="/logos/nvidea.svg" alt="Nvidea logo" />
				Nvidea
			</dd>
			<dd class="flex items-center">
				<img class="mr-2 h-8 flex-none" src="/logos/cooler-master.svg" alt="Cooler Master logo" />
				Cooler Master
			</dd>
			<dd class="flex items-center">
				<img class="mr-2 h-8 flex-none" src="/logos/intel.svg" alt="Intel logo" />
				Intel
			</dd>
		</dl>
		<p class="mb-8 leading-relaxed text-gray-200 sm:text-lg">
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
		class="absolute top-0 left-0 h-full object-cover lg:static lg:col-span-6 lg:mx-0 lg:rounded-lg lg:border lg:border-gray-700"
		src="/hero-images/0.jpg"
		alt=""
	/>
</div>
