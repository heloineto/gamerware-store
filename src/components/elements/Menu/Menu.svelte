<script>
	import breakpoints from "../../../lib/constants/breakpoints";
	import MediaQuery from "../MediaQuery/MediaQuery.svelte";
	import MobileMenu from "./MobileMenu.svelte";

	export let breakpoint = "2xl";
</script>

<MediaQuery query="(min-width: {breakpoints[breakpoint]}px)" let:matches>
	{#if matches}
		<div class="flex h-full gap-2">
			<slot />
		</div>
	{:else}
		<MobileMenu>
			<slot />
		</MobileMenu>
	{/if}
</MediaQuery>
