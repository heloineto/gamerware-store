<script>
	export let title = "";
	export let description = "";
	export let amount;
</script>

<div class="flex h-10 items-center justify-between">
	<div class="flex items-center gap-2">
		<dt class="text-sm text-gray-300">{title}</dt>
		{#if amount && amount >= 2}
			<p class="text-xs font-bold text-gray-400">
				x {amount}
			</p>
		{/if}
	</div>
	<dd class="text-sm font-medium text-gray-100">{description}</dd>
</div>
