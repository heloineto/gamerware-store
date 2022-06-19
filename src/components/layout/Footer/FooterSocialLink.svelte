<script>
	import Button from "../../elements/Button/Button.svelte";

	let href;
</script>

<Button as="a" {href} class="h-16 w-16 !rounded-full hover:!bg-gray-600" {...$$restProps}>
	<slot />
</Button>
