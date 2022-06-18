<script>
	import Button from '../../elements/Button/Button.svelte';

	export let href;
</script>

<Button as="a" {href} class="px-6 md:w-full md:text-center">
	<slot />
</Button>
