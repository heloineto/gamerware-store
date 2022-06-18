<script>
	import TwitterLogo from 'phosphor-svelte/lib/TwitterLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import WhatsappLogo from 'phosphor-svelte/lib/WhatsappLogo';
	import FooterSocialLink from './FooterSocialLink.svelte';
</script>

<div class="mt-4 mb-8 flex flex-col items-center justify-center gap-4">
	<h4 class="text-sm font-bold uppercase">Redes Sociais</h4>
	<div class="flex gap-6">
		<FooterSocialLink href="#" aria-label="instagram">
			<InstagramLogo class="h-8 w-8" />
		</FooterSocialLink>
		<FooterSocialLink href="#" aria-label="twitter">
			<TwitterLogo class="h-8 w-8" />
		</FooterSocialLink>
		<FooterSocialLink href="#" aria-label="discord">
			<DiscordLogo class="h-8 w-8" />
		</FooterSocialLink>
		<FooterSocialLink href="#" aria-label="whatsapp">
			<WhatsappLogo class="h-8 w-8" />
		</FooterSocialLink>
	</div>
</div>
