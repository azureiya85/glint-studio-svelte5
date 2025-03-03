<script>
	import { onMount } from 'svelte';
	import CompanyOverview from '$lib/components/cell/CompanyOverview.svelte';
	let showHero = $state(false);

	onMount(() => {
		showHero = true;
	});
</script>

<svelte:head>
	<title>Company Profile | glint studio</title>
	<meta name="description" content="Take a glimpse of the history of glint" />
</svelte:head>

{#if showHero}
	<CompanyOverview />
{/if}
