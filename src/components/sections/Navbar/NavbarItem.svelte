<script>
	export let href;
</script>

<a
	{href}
	class="flex flex-grow items-center justify-center whitespace-nowrap rounded-lg bg-gray-700 px-6 transition-colors duration-500 hover:bg-gray-800 md:w-full md:text-center"
>
	<slot />
</a>
