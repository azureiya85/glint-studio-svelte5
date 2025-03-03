<script>
	import { onMount } from 'svelte';
	import ServiceTestimony from '$lib/components/cell/ServiceTestimony.svelte';
	import Navbar from '$lib/components/atom/Navbar.svelte';
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
	<Navbar />
	<ServiceTestimony />
{/if}
