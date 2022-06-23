<script>
	import classes from "../../../lib/utils/classes";
	export let key;

	if (!key) throw "Header key is undefined";

	const { class: classNames, ...restProps } = $$restProps;
</script>

<div class={classes("flex items-center gap-4", classNames)} {...restProps}>
	<div class="h-14 w-14 flex-shrink-0" style="background-image:url(/icons/{key}.png)" alt="icon" />
	<h1 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
		<slot />
	</h1>
</div>
