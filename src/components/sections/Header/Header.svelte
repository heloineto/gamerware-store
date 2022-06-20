<script>
	export let key;

	if (!key) throw "Header key is undefined";
</script>

<div class="flex items-center gap-4">
	<div class="h-14 w-14" style="background-image:url(/icons/{key}.png)" alt="icon" />
	<h1 class="text-5xl font-bold tracking-tight text-gray-200">
		<slot />
	</h1>
</div>
