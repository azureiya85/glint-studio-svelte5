<script lang="ts">
	import { serviceDescriptions } from '$lib/components/nerve/ServiceDesc';
	import Icon from '@iconify/svelte';

	// Reactive state using runes
	let headingVisible = $state(false);
	let servicesVisible = $state(false);
	let buttonVisible = $state(false);
	let iconsVisible = $state(Array($serviceDescriptions.length).fill(false));

	// Element references
	let headingContainer: HTMLElement | undefined;
	let servicesContainer: HTMLElement | undefined;
	let buttonContainer: HTMLElement | undefined;
	let iconContainers: HTMLElement[] = [];

	// Create visibility observer utility
	function createVisibilityObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.3,
		rootMargin = '0px'
	) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					callback(true);
					observer.unobserve(node);
				}
			},
			{ threshold, rootMargin }
		);
		observer.observe(node);
		return observer;
	}

	// Map service catchphrases to icons
	function getServiceIcon(catchphrase: string): string {
		return (
			{
				'Build & Integrate': 'mdi:rocket-launch-outline',
				'Collaborate & Share': 'mdi:account-group-outline',
				'Optimize & Scale': 'mdi:chart-line'
			}[catchphrase] || 'mdi:check-circle-outline'
		);
	}

	// Setup observers using $effect, dependent on DOM elements
	$effect(() => {
		// Only run when all required elements are defined
		if (!headingContainer || !servicesContainer || !buttonContainer) return;

		const observers: IntersectionObserver[] = [];

		observers.push(
			createVisibilityObserver(headingContainer, (visible) => {
				headingVisible = visible;
			})
		);

		observers.push(
			createVisibilityObserver(
				servicesContainer,
				(visible) => {
					setTimeout(() => {
						servicesVisible = visible;
					}, 400);
				},
				0.1
			)
		);

		observers.push(
			createVisibilityObserver(
				buttonContainer,
				(visible) => {
					setTimeout(() => {
						buttonVisible = visible;
					}, 800);
				},
				0.1
			)
		);

		iconContainers.forEach((container, i) => {
			if (container) {
				observers.push(
					createVisibilityObserver(
						container,
						(visible) => {
							setTimeout(
								() => {
									iconsVisible[i] = visible;
								},
								600 + i * 100
							);
						},
						0.1
					)
				);
			}
		});

		// Cleanup
		return () => observers.forEach((obs) => obs.disconnect());
	});
</script>

<section
	aria-labelledby="service-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-primary-800"
>
	<div class="min-h-screen container mx-auto max-w-6xl">
		<div
			class="flex flex-col justify-center items-center text-center mt-8 mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={headingVisible}
			bind:this={headingContainer}
		>
			<h1
				id="service-heading"
				class="font-heading-token text-4xl md:text-6xl text-primary-50 font-bold"
			>
				design-driven solutions for the<br />
				<span class="text-secondary-600">digital future</span>
			</h1>
			<p class="text-xl text-semibold md:text-2xl text-primary-100 mt-8 max-w-2xl">
				Combine creative design thinking with technical expertise to build faster, more intuitive
				applications that delight your users and grow with your business.
			</p>
		</div>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
			aria-label="Our services"
			bind:this={servicesContainer}
		>
			{#each $serviceDescriptions as service, i (service.heading)}
				<div
					class="p-6 md:p-8 shadow-lg rounded-3xl bg-primary-700 border border-tertiary-600 transition-all duration-500 hover:-translate-y-2 opacity-0 translate-x-10 h-[480px] flex flex-col"
					style:transition-delay={`${300 + i * 200}ms`}
					class:visible={servicesVisible}
				>
					<p
						class="pl-2 bg-secondary-700 rounded-full text-sm font-semibold text-primary-100 mb-2 md:mb-4"
					>
						{service.catchphrase}
					</p>
					<h2 class="pl-1 text-primary-100 text-2xl md:text-3xl font-bold mb-2 md:mb-4">
						{service.heading}
					</h2>
					<p class="pl-1 text-primary-100 text-xl md:text-base flex-grow">
						{service.description}
					</p>
					<div class="w-full h-px bg-tertiary-600 my-4 opacity-70"></div>
					<div
						class="flex justify-center items-center mt-2 opacity-0 translate-y-10 transition-all duration-500"
						class:visible={iconsVisible[i]}
						style:transition-delay={`${600 + i * 100}ms`}
						bind:this={iconContainers[i]}
					>
						<Icon
							icon={getServiceIcon(service.catchphrase)}
							class="text-secondary-500 w-10 h-10"
							aria-hidden="true"
						/>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="mt-12 md:mt-16 flex justify-center opacity-0 translate-y-10 transition-all duration-500 ease-out"
			class:visible={buttonVisible}
			bind:this={buttonContainer}
		>
			<a
				href="/services"
				class="flex items-center gap-2 text-lg font-semibold text-white bg-secondary-600 px-6 py-3 border border-tertiary-600 rounded-full shadow-md hover:shadow-2xl hover:bg-secondary-500 transition-all mx-8 mt-4"
				aria-label="Explore all our services"
			>
				<Icon icon="mdi:idea" class="text-primary-100 w-5 h-5" aria-hidden="true" />
				Explore Our Services
			</a>
		</div>
	</div>
</section>

<style>
	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
		transform: translateX(0) !important;
	}

	.translate-y-10 {
		transform: translateY(40px);
	}

	.translate-x-10 {
		transform: translateX(-40px);
	}

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
