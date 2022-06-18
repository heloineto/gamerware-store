<script>
	export let title;
</script>

<div class="flex flex-col gap-4">
	<h4 class="font-semibold text-gray-100">{title}</h4>
	<slot />
</div>
