<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { onMount } from 'svelte';
	import HeroSection from '$lib/components/cell/HeroSection.svelte';

	let showHero = false;

	onMount(() => {
		showHero = true; // Forces re-mount on page load
	});
</script>

{#if showHero}
	<HeroSection />
{/if}
