<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { onMount } from 'svelte';
	import HeroSection from '$lib/components/cell/HeroSection.svelte';
	import TestimonialList from '$lib/components/cell/TestimonialList.svelte';
	import ServiceSection from '$lib/components/cell/ServiceSection.svelte';
	import CondensedOverview from '$lib/components/cell/CondensedOverview.svelte';

	let showHero = $state(false);

	onMount(() => {
		showHero = true;
	});
</script>

{#if showHero}
	<HeroSection />
	<CondensedOverview />
	<ServiceSection />
	<TestimonialList />
{/if}
