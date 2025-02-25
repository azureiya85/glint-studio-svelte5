<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { onMount } from 'svelte';
	import HeroSection from '$lib/components/cell/HeroSection.svelte';
	import TestimonialList from '$lib/components/cell/TestimonialList.svelte';

	let showHero = $state(false);

	onMount(() => {
		showHero = true; // Forces re-mount on page load
	});
</script>

{#if showHero}
	<HeroSection />
	<TestimonialList />
{/if}
