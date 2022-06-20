<script>
	import clsx from "clsx";
	import Button from "../../elements/Button";

	let hovering = false;
	const { class: className, ...restProps } = $$restProps;
</script>

<Button
	class={clsx("w-40 gap-2 py-2 hover:font-semibold", className)}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	{...restProps}
>
	<slot {hovering} />
</Button>
