<script lang="ts">
	import { serviceDescriptions } from '$lib/components/nerve/ServiceDesc';
	import { onMount } from 'svelte';

	let headingVisible = false;
	let servicesVisible = false;
	let headingContainer: HTMLElement | null = null;
	let servicesContainer: HTMLElement | null = null;

	// Intersection Observer function with proper typing
	function observeVisibility(node: HTMLElement, callback: (visible: boolean) => void) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						callback(true);
						observer.unobserve(node); // Stop observing once it's visible
					}
				});
			},
			{ threshold: 0.3 }
		);
		observer.observe(node);
	}

	// Attach observers when the component mounts
	onMount(() => {
		if (headingContainer)
			observeVisibility(headingContainer, (visible) => (headingVisible = visible));
		if (servicesContainer)
			observeVisibility(servicesContainer, (visible) => (servicesVisible = visible));
	});
</script>

<section
	aria-labelledby="service-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-primary-800"
>
	<!-- Background gradient or pattern could be added here if desired -->
	<div class="min-h-screen container mx-auto max-w-6xl">
		<!-- Heading Container (Fly In) -->
		<div
			bind:this={headingContainer}
			class="flex flex-col justify-center items-center text-center mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={headingVisible}
		>
			<h1
				id="service-heading"
				class="font-heading-token text-4xl md:text-6xl text-secondary-600 font-bold"
			>
				Main Heading
			</h1>
			<p class="text-base md:text-lg text-white mt-4 max-w-2xl">
				This is a descriptive paragraph for the main heading.
			</p>
		</div>

		<!-- Services Container (Fade In) -->
		<div
			bind:this={servicesContainer}
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0 transition-opacity duration-800 delay-200 ease-in"
			class:visible={servicesVisible}
		>
			{#each $serviceDescriptions as service, i}
				<div
					class="p-6 md:p-8 shadow-lg rounded-3xl bg-primary-700 border border-tertiary-800 transform transition-transform duration-300 hover:-translate-y-2 opacity-0 translate-y-10 mx-4 h-[400px]"
					style="transition-delay: {200 + i * 100}ms;"
					class:visible={servicesVisible}
				>
					<p class="text-sm font-medium text-primary-100 mb-2 md:mb-4">{service.catchphrase}</p>
					<h2 class="text-primary-100 text-2xl md:text-3xl font-bold mb-2 md:mb-4">
						{service.heading}
					</h2>
					<p class="text-primary-100 text-sm md:text-base">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Fly-in effect */
	.translate-y-10 {
		transform: translateY(40px);
	}
</style>
