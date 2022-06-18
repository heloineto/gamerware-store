<script>
	import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import WhatsappLogo from 'phosphor-svelte/lib/WhatsappLogo';
	import Button from '../../elements/Button/Button.svelte';
</script>

<div class="mt-4 mb-8 flex flex-col items-center justify-center gap-4">
	<h4 class="text-sm font-bold uppercase">Redes Sociais</h4>
	<div class="flex gap-6">
		<Button as="a" href="#" class="h-16 w-16 rounded-full" aria-label="instagram">
			<InstagramLogo class="h-8 w-8" />
		</Button>
		<Button as="a" href="#" class="h-16 w-16 rounded-full" aria-label="twitter">
			<TwitterLogo class="h-8 w-8" />
		</Button>
		<Button as="a" href="#" class="h-16 w-16 rounded-full" aria-label="discord">
			<DiscordLogo class="h-8 w-8" />
		</Button>
		<Button as="a" href="#" class="h-16 w-16 rounded-full" aria-label="whatsapp">
			<WhatsappLogo class="h-8 w-8" />
		</Button>
	</div>
</div>
