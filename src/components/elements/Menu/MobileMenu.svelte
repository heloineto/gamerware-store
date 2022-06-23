<script>
	import Button from "./../Button/Button.svelte";
	import List from "phosphor-svelte/lib/List";
	import X from "phosphor-svelte/lib/X";
	import url from "../../../lib/stores/url";
	import Modal from "../Modal/Modal.svelte";
	import { onMount } from "svelte";

	let open = false;
	let element;
	let exclude;

	function toggleOpen() {
		open = !open;
	}

	url.subscribe(() => (open = false));

	onMount(() => {
		exclude = [element];
	});

	function onCloseModal() {
		open = false;
	}
</script>

<div class="relative flex h-full" bind:this={element}>
	<Button class="aspect-square h-full" as="button" type="button" on:click={toggleOpen}>
		{#if open}
			<X class="h-6 w-6" weight="bold" />
		{:else}
			<List class="h-6 w-6" weight="bold" />
		{/if}
	</Button>
	<Modal class="!items-start pt-24" {open} onClose={onCloseModal} {exclude}>
		<div class="flex w-60 flex-col gap-3">
			<slot />
		</div>
	</Modal>
</div>
