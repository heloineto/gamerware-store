<script>
	export let name;
	export let label;
	export let errors;
	export let type = "text";
</script>

<label>
	{label}:
	<input class="text-gray-900" {type} {name} {...$$restProps} />
	{#if errors[name]}
		<p class="text-red-500">{errors[name]}</p>
	{/if}
</label>
