<script>
	import Button from "../../elements/Button/Button.svelte";

	let href;
</script>

<Button
	as="a"
	{href}
	class="h-14 w-14 !rounded-full hover:!bg-gray-600 md:h-16 md:w-16"
	{...$$restProps}
>
	<slot />
</Button>
