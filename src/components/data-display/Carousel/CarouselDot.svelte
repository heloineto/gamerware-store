<script>
	import classes from "../../../lib/utils/classes";

	export let active = false;
</script>

<button
	class={classes(
		"rounded-full transition-all inline-block cursor-pointer hover:bg-white bg-gray-400 duration-200 hover:scale-105 active:scale-95",
		active
			? "bg-gray-200 h-[0.875rem] w-[0.875rem] outline outline-gray-400 outline-offset-2 outline-2"
			: "h-3 w-3"
	)}
	on:click
/>
