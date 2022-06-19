<script>
	import breakpoints from "../../../lib/constants/breakpoints";
	import MediaQuery from "../MediaQuery/MediaQuery.svelte";
	import MenuResponsive from "./MenuResponsive.svelte";

	export let breakpoint;
</script>

<MediaQuery query="(min-width: {breakpoints[breakpoint]}px)" let:matches>
	{#if matches}
		<div class="flex h-full gap-2">
			<slot />
		</div>
	{:else}
		<MenuResponsive>
			<slot />
		</MenuResponsive>
	{/if}
</MediaQuery>
