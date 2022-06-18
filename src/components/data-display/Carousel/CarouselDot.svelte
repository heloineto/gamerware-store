<script>
	import clsx from 'clsx';

	export let active = false;
</script>

<button
	class={clsx(
		'rounded-full transition-all inline-block cursor-pointer hover:bg-white bg-gray-400 duration-200 hover:scale-105 active:scale-95',
		active ? 'bg-gray-200 h-3 w-3 outline outline-gray-400 outline-offset-2 outline-2' : 'h-2 w-2'
	)}
	on:click
/>
