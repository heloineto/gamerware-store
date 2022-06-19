<script>
	export let title;
</script>

<div class="flex flex-col gap-4">
	<h4 class="text-sm font-semibold text-gray-100 md:text-base">{title}</h4>
	<slot />
</div>
