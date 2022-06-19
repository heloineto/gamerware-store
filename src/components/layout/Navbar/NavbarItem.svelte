<script>
	import Button from "../../elements/Button/Button.svelte";

	export let href;
</script>

<Button as="a" {href} class="w-full py-3 text-center md:w-auto md:py-0 md:px-5">
	<slot />
</Button>
