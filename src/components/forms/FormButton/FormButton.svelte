<script>
	import classes from "../../../lib/utils/classes";
	import Button from "../../elements/Button";
	export let disabled = false;

	let hovering = false;
	const { class: className, ...restProps } = $$restProps;
</script>

<Button
	class={classes("w-40 gap-2 py-2 hover:enabled:font-semibold", className)}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	{disabled}
	{...restProps}
>
	<slot {hovering} />
</Button>
