<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	// Core Values data
	const coreValues = [
		{
			title: 'Creativity First',
			description: 'We embrace unconventional thinking and the most interesting solutions.',
			icon: 'mdi:lightbulb-on'
		},
		{
			title: 'Human-Centered',
			description: 'We design for humans first, algorithms second, prioritizing real experiences.',
			icon: 'mdi:human-greeting'
		},
		{
			title: 'Purposeful Fun',
			description: 'Good design should delight with moments of joy that turn users into fans.',
			icon: 'mdi:hand-heart'
		}
	];

	// Animation state variables
	let headerVisible = false;
	let aboutTextVisible = false;
	let valuesVisible = false;

	// Element references
	let headerContainer: HTMLElement;
	let aboutTextContainer: HTMLElement;
	let valuesContainer: HTMLElement;

	/**
	 * Creates an Intersection Observer to track when elements come into view
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

		// Set up observers for each section
		if (headerContainer) {
			observers.push(
				createVisibilityObserver(headerContainer, (visible) => {
					headerVisible = visible;

					// Delay the about text animation
					setTimeout(() => {
						aboutTextVisible = true;
					}, 400);
				})
			);
		}

		if (valuesContainer) {
			observers.push(
				createVisibilityObserver(valuesContainer, (visible) => {
					valuesVisible = visible;
				})
			);
		}

		// Clean up observers on component destruction
		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	});
</script>

<section
	aria-labelledby="company-heading"
	class="relative min-h-screen flex items-center py-8 px-4 md:px-16 bg-gradient-to-b from-primary-700 to-primary-900"
>
	<div class="container mx-auto max-w-6xl">
		<!-- Heading Container with Animation -->
		<div
			bind:this={headerContainer}
			class="flex flex-col justify-center items-center text-center mb-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={headerVisible}
		>
			<h1
				id="company-heading"
				class="font-heading-token text-4xl md:text-6xl text-primary-50 font-bold"
			>
				not your typical <br /> <span class="text-secondary-600">design studio</span>
			</h1>

			<!-- Decorative element -->
			<div class="relative w-24 h-1 bg-tertiary-500 mt-6 mb-8 overflow-hidden">
				<div
					class="absolute left-0 top-0 w-full h-full bg-secondary-600 transform transition-transform duration-1000"
					style={headerVisible ? 'transform: translateX(0);' : 'transform: translateX(-100%);'}
				></div>
			</div>
		</div>

		<!-- About Text with Animation -->
		<div
			bind:this={aboutTextContainer}
			class="max-w-3xl mx-auto text-center mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={aboutTextVisible}
			style="transition-delay: 400ms;"
		>
			<p class="text-xl md:text-2xl text-primary-100">
				Founded in 2018, we've grown from a tiny apartment to an award-winning team of 30+
				creatives. We believe digital experiences should feel as intuitive as a conversation with a
				friend—where creativity meets functionality to create spaces that feel alive, responsive,
				and distinctly human.
			</p>
		</div>

		<!-- Core Values -->
		<div
			bind:this={valuesContainer}
			class="mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={valuesVisible}
		>
			<h2 class="text-2xl md:text-3xl font-bold text-secondary-600 mb-6 text-center">
				Our Core Values
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each coreValues as value}
					<div
						class="p-5 bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg transform transition-all duration-500 hover:-translate-y-2"
					>
						<div
							class="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-600 mb-3"
						>
							<Icon icon={value.icon} class="text-primary-100 w-5 h-5" aria-hidden="true" />
						</div>
						<h3 class="text-lg font-bold text-primary-100 mb-2">{value.title}</h3>
						<p class="text-primary-100 text-md">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA Section -->
		<div class="text-center mt-12">
			<a
				href="/team"
				class="inline-flex items-center gap-2 text-lg font-semibold text-white bg-secondary-600 px-6 py-3 border border-tertiary-600 rounded-full shadow-md hover:shadow-2xl hover:bg-secondary-500 transition-all"
			>
				Learn More About Us!
				<Icon icon="mdi:account-group" class="text-primary-100 w-5 h-5" aria-hidden="true" />
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

	/* Accessibility - reduce motion if user prefers */
	@media (prefers-reduced-motion: reduce) {
		.translate-y-10 {
			transform: none;
		}

		.transition-all {
			transition: opacity 0.1s ease-out !important;
		}

		div[style*='transition-delay'] {
			transition-delay: 0ms !important;
		}

		a,
		div {
			transition: none !important;
		}
	}
</style>
