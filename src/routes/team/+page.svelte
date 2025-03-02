<script>
	import { onMount } from 'svelte';
	import CompanyOverview from '$lib/components/cell/CompanyOverview.svelte';
	let showHero = $state(false);

	onMount(() => {
		showHero = true;
	});
</script>

{#if showHero}
	<CompanyOverview />
{/if}
