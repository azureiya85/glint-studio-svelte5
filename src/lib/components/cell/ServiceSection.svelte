<script lang="ts">
	import { serviceDescriptions } from '$lib/components/nerve/ServiceDesc';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	// Visibility state trackers
	let headingVisible = false;
	let servicesVisible = false;
	let buttonVisible = false;

	// Element references
	let headingContainer: HTMLElement | null = null;
	let servicesContainer: HTMLElement | null = null;
	let buttonContainer: HTMLElement | null = null;

	/**
	 * Creates an Intersection Observer to track when elements come into view
	 * @param node - The DOM element to observe
	 * @param callback - Function to call when element becomes visible
	 * @param threshold - Visibility threshold (0-1)
	 * @param rootMargin - Margin around the root
	 */
	function createVisibilityObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.3,
		rootMargin = '0px'
	): IntersectionObserver {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						callback(true);
						observer.unobserve(node); // Stop observing once it's visible
					}
				});
			},
			{ threshold, rootMargin }
		);
		observer.observe(node);
		return observer;
	}

	onMount(() => {
		// Create array to track all observers for cleanup
		const observers: IntersectionObserver[] = [];

		// Observe heading container
		if (headingContainer) {
			observers.push(
				createVisibilityObserver(headingContainer, (visible) => {
					headingVisible = visible;
				})
			);
		}

		// Observe services container with lower threshold to start animation earlier
		if (servicesContainer) {
			observers.push(
				createVisibilityObserver(
					servicesContainer,
					(visible) => {
						// Add delay after heading animation completes
						setTimeout(() => {
							servicesVisible = visible;
						}, 400); // Delay services animation after heading
					},
					0.1
				)
			);
		}

		// Observe button container
		if (buttonContainer) {
			observers.push(
				createVisibilityObserver(
					buttonContainer,
					(visible) => {
						// Show button after services have started animating
						setTimeout(() => {
							buttonVisible = visible;
						}, 800); // Longer delay for button to appear after services start appearing
					},
					0.1
				)
			);
		}

		// Clean up observers on component destruction
		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	});
</script>

<section
	aria-labelledby="service-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-primary-800"
>
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

		<!-- Services Container (Sequential Fly In) -->
		<div
			bind:this={servicesContainer}
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
			aria-label="Our services"
		>
			{#each $serviceDescriptions as service, i}
				<div
					class="p-6 md:p-8 shadow-lg rounded-3xl bg-primary-700 border border-tertiary-600 transform transition-all duration-500 hover:-translate-y-2 opacity-0 translate-x-10 h-[400px] flex flex-col"
					style="transition-delay: {300 + i * 200}ms;"
					class:visible={servicesVisible}
				>
					<p class="text-sm font-medium text-primary-100 mb-2 md:mb-4">{service.catchphrase}</p>
					<h2 class="text-primary-100 text-2xl md:text-3xl font-bold mb-2 md:mb-4">
						{service.heading}
					</h2>
					<p class="text-primary-100 text-sm md:text-base flex-grow">{service.description}</p>
					<div class="mt-4 flex justify-end">
						<!-- <a -->
						<!-- 	href={`/services/${service.slug || ''}`} -->
						<!-- 	class="text-secondary-500 hover:text-secondary-400 font-medium inline-flex items-center gap-1" -->
						<!-- 	aria-label={`Learn more about ${service.heading}`} -->
						<!-- > -->
						<!-- 	Learn more -->
						<!-- 	<span aria-hidden="true">→</span> -->
						<!-- </a> -->
					</div>
				</div>
			{/each}
		</div>

		<!-- Find Out More Button (Fly Up) -->
		<div
			bind:this={buttonContainer}
			class="mt-12 md:mt-16 flex justify-center md:justify-end opacity-0 translate-y-10 transition-all duration-500 ease-out"
			class:visible={buttonVisible}
		>
			<a
				href="/services"
				class="flex items-center gap-2 text-lg font-semibold text-white bg-secondary-600 px-6 py-3 border border-tertiary-600 rounded-full shadow-md hover:shadow-2xl hover:bg-secondary-500 transition-all mx-8 mt-4"
				aria-label="Explore all our services"
			>
				Explore Our Services
				<Icon
					icon="ic:baseline-keyboard-double-arrow-right"
					class="text-primary-100 w-5 h-5"
					aria-hidden="true"
				/>
			</a>
		</div>
	</div>
</section>

<style>
	/* Animation classes */
	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
		transform: translateX(0) !important;
	}

	/* Fly-in vertical effect */
	.translate-y-10 {
		transform: translateY(40px);
	}

	/* Fly-in horizontal effect */
	.translate-x-10 {
		transform: translateX(-40px);
	}

	/* Accessibility - reduce motion if user prefers */
	@media (prefers-reduced-motion: reduce) {
		.translate-y-10,
		.translate-x-10 {
			transform: none;
		}

		.transition-all {
			transition: opacity 0.1s ease-out !important;
		}

		a {
			transition: none !important;
		}
	}
</style>
