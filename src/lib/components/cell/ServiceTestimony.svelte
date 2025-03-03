<script lang="ts">
	import {
		enhancedServiceDescriptions,
		combinedPackages
	} from '$lib/components/nerve/EnhancedServiceDesc';
	import {
		enhancedTestimonials,
		fetchEnhancedTestimonials
	} from '$lib/components/nerve/EnhancedTestimonialData';
	import Icon from '@iconify/svelte';

	// Billing cycle state
	let billingCycle = $state('monthly');

	// Animation visibility states using runes
	let pageHeaderVisible = $state(false);
	let servicesVisible = $state(false);
	let combinedPackagesVisible = $state(false);
	let testimonialHeadingVisible = $state(false);
	let testimonialGridVisible = $state(false);
	let ctaVisible = $state(false);

	// Element references for Intersection Observer
	let pageHeaderRef: HTMLElement;
	let servicesRef: HTMLElement;
	let combinedPackagesRef: HTMLElement;
	let testimonialHeadingRef: HTMLElement;
	let testimonialGridRef: HTMLElement;
	let ctaRef: HTMLElement;

	// Create visibility observer utility
	function createVisibilityObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.2,
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

	// Format currency
	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0
		}).format(amount);
	}

	// Calculate and format monthly equivalent for yearly pricing
	function calculateMonthlyEquivalent(yearlyPrice: number): string {
		const monthlyEquivalent = yearlyPrice / 12;
		return formatCurrency(monthlyEquivalent);
	}

	// Calculate savings
	function calculateSavings(monthly: number, yearly: number): string {
		const annualCost = monthly * 12;
		const savings = ((annualCost - yearly) / annualCost) * 100;
		return Math.round(savings) + '%';
	}

	// Setup observers using runes
	$effect(() => {
		// Fetch testimonial data
		fetchEnhancedTestimonials();

		// Only run when all required elements are defined
		if (
			!pageHeaderRef ||
			!servicesRef ||
			!combinedPackagesRef ||
			!testimonialHeadingRef ||
			!testimonialGridRef ||
			!ctaRef
		)
			return;

		const observers: IntersectionObserver[] = [];

		observers.push(
			createVisibilityObserver(pageHeaderRef, (visible) => {
				pageHeaderVisible = visible;
			})
		);

		observers.push(
			createVisibilityObserver(
				servicesRef,
				(visible) => {
					setTimeout(() => {
						servicesVisible = visible;
					}, 200);
				},
				0.1
			)
		);

		observers.push(
			createVisibilityObserver(
				combinedPackagesRef,
				(visible) => {
					setTimeout(() => {
						combinedPackagesVisible = visible;
					}, 300);
				},
				0.1
			)
		);

		observers.push(
			createVisibilityObserver(testimonialHeadingRef, (visible) => {
				setTimeout(() => {
					testimonialHeadingVisible = visible;
				}, 200);
			})
		);

		observers.push(
			createVisibilityObserver(
				testimonialGridRef,
				(visible) => {
					setTimeout(() => {
						testimonialGridVisible = visible;
					}, 300);
				},
				0.1
			)
		);

		observers.push(
			createVisibilityObserver(ctaRef, (visible) => {
				setTimeout(() => {
					ctaVisible = visible;
				}, 400);
			})
		);

		// Cleanup
		return () => observers.forEach((obs) => obs.disconnect());
	});
</script>

<svelte:head>
	<title>Services & Testimonials | UI/UX Design Solutions</title>
	<meta
		name="description"
		content="Explore our UI/UX design services and read testimonials from satisfied clients. We offer rapid development, collaborative design, and scalable systems."
	/>
	<meta
		name="keywords"
		content="UI/UX design, design services, rapid development, collaborative design, scalable design systems, user experience"
	/>
	<link rel="canonical" href="/services" />
</svelte:head>

<main class="min-h-screen bg-primary-900 text-primary-50">
	<!-- Hero Section -->
	<section class="relative py-24 mb-4 md:px-16 overflow-hidden">
		<div
			class="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
			aria-hidden="true"
		>
			<div
				class="absolute top-0 right-0 bg-secondary-600 w-1/2 h-1/2 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"
			></div>
			<div
				class="absolute bottom-0 left-0 bg-tertiary-600 w-1/2 h-1/2 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"
			></div>
		</div>

		<div
			bind:this={pageHeaderRef}
			class="container mt-12 mx-auto max-w-6xl relative z-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={pageHeaderVisible}
		>
			<h1 class="font-heading-token text-4xl md:text-7xl font-bold text-center mb-6">
				<span class="text-primary-50">Design Solutions for <br /></span>
				<span class="text-secondary-600 block md:inline"> Digital Success</span>
			</h1>

			<p class="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12">
				Tailored UI/UX services that transform ideas into intuitive, scalable digital experiences.
				Choose the perfect package for your business needs.
			</p>

			<div class="flex justify-center items-center space-x-2 mb-4">
				<div
					class="relative p-1 bg-primary-800 rounded-full inline-flex transition-all duration-300"
				>
					<button
						class="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
						class:active={billingCycle === 'monthly'}
						onclick={() => (billingCycle = 'monthly')}
						aria-label="Switch to monthly billing"
					>
						Monthly
					</button>
					<button
						class="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
						class:active={billingCycle === 'yearly'}
						onclick={() => (billingCycle = 'yearly')}
						aria-label="Switch to yearly billing"
					>
						Yearly
						<span
							class="absolute -top-2 -right-2 bg-secondary-600 text-xs px-2 py-0.5 rounded-full"
						>
							Save 15-20%
						</span>
					</button>
					<div
						class="absolute top-1 left-1 w-1/2 h-8 bg-secondary-600 rounded-full transition-all duration-300"
						style:transform={billingCycle === 'yearly' ? 'translateX(100%)' : 'translateX(0)'}
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Individual Services Section -->
	<section aria-labelledby="services-heading" class="py-12 px-4 md:px-16">
		<div class="container mx-auto max-w-6xl">
			<h2
				id="services-heading"
				class="font-heading-token text-3xl md:text-5xl font-bold text-center mb-16"
			>
				<span class="text-primary-50">Core</span>
				<span class="text-secondary-600"> Design Services</span>
			</h2>

			<div
				bind:this={servicesRef}
				class="pt-4 mt-4 grid grid-cols-1 md:grid-cols-3 gap-8"
				aria-label="Our services"
			>
				{#each $enhancedServiceDescriptions as service, i (service.heading)}
					<div
						class="relative flex flex-col rounded-3xl border border-tertiary-600 bg-primary-800 overflow-hidden transition-all duration-500 opacity-0 translate-y-10"
						style:transition-delay={`${100 + i * 150}ms`}
						class:visible={servicesVisible}
					>
						<div class="p-8 flex-grow">
							<div
								class="w-12 h-12 mb-2 rounded-3xl bg-secondary-700/30 flex items-center justify-center"
							>
								<Icon
									icon={getServiceIcon(service.catchphrase)}
									class="text-secondary-500 w-6 h-6"
									aria-hidden="true"
								/>
							</div>
							<p class="ml-4 text-sm font-semibold text-secondary-600 mb-2">
								{service.catchphrase}
							</p>
							<h3 class="px-4 text-2xl md:text-3xl font-bold mb-4 text-primary-50">
								{service.heading}
							</h3>
							<p class="px-4 text-primary-200 mb-6">
								{service.description}
							</p>
							<div class="mb-8">
								<p class="px-4 text-4xl font-bold mb-1">
									{formatCurrency(
										billingCycle === 'monthly' ? service.pricing.monthly : service.pricing.yearly
									)}
									<span class="text-sm font-normal text-primary-300">
										{billingCycle === 'monthly' ? '/month' : '/year'}
									</span>
								</p>
								{#if billingCycle === 'yearly'}
									<p class="px-4 text-sm text-primary-300">
										({calculateMonthlyEquivalent(service.pricing.yearly)}/mo equivalent · Save {calculateSavings(
											service.pricing.monthly,
											service.pricing.yearly
										)})
									</p>
								{/if}
							</div>
							<ul class="px-4 space-y-3 mb-8">
								{#each service.pricing.features as feature}
									<li class="flex items-start">
										<Icon
											icon="mdi:check-circle"
											class="text-secondary-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
										/>
										<span class="text-primary-200">{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
						<div class="p-6 border-t border-tertiary-600">
							<a
								href="/contact?service={encodeURIComponent(service.heading)}"
								class="block rounded-full w-full py-3 px-4 bg-secondary-600 hover:bg-secondary-500 text-white font-medium rounded-xl text-center transition-colors duration-300"
							>
								Get Started
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Combined Packages Section -->
	<section aria-labelledby="packages-heading" class="py-16 px-4 md:px-16 bg-primary-800">
		<div class="container mx-auto max-w-6xl">
			<h2
				id="packages-heading"
				class="font-heading-token text-3xl md:text-5xl font-bold text-center mb-4"
			>
				<span class="text-primary-50">Value</span>
				<span class="text-secondary-600"> Packages</span>
			</h2>
			<p class="text-xl text-center text-primary-200 max-w-3xl mx-auto mb-16">
				Save by combining our core services into comprehensive packages tailored for your specific
				needs.
			</p>

			<div
				bind:this={combinedPackagesRef}
				class="grid grid-cols-1 md:grid-cols-3 gap-8"
				aria-label="Our combined packages"
			>
				{#each $combinedPackages as pkg, i (pkg.title)}
					<div
						class="flex flex-col rounded-3xl border border-tertiary-600 bg-primary-900 overflow-hidden transition-all duration-500 opacity-0 translate-y-10"
						style:transition-delay={`${100 + i * 150}ms`}
						class:visible={combinedPackagesVisible}
					>
						<div class="p-8 flex-grow">
							<span
								class="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-secondary-600 text-white mb-6"
							>
								Save {pkg.savings}
							</span>
							<h3 class="px-4 text-2xl font-bold mb-3 text-primary-50">
								{pkg.title}
							</h3>
							<p class="px-4 text-primary-200 mb-4">
								{pkg.description}
							</p>
							<div class="mb-4">
								<p class="px-4 text-lg font-medium text-primary-100">Includes:</p>
								<ul class="px-4 mb-4">
									{#each pkg.services as service}
										<li class="flex items-center py-1">
											<Icon
												icon="mdi:checkbox-marked-circle"
												class="text-secondary-500 w-5 h-5 mr-2"
											/>
											<span>{service}</span>
										</li>
									{/each}
								</ul>
							</div>
							<div class="mb-6">
								<p class="px-4 text-4xl font-bold mb-1">
									{formatCurrency(billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice)}
									<span class="text-sm font-normal text-primary-300">
										{billingCycle === 'monthly' ? '/month' : '/year'}
									</span>
								</p>
								{#if billingCycle === 'yearly'}
									<p class="px-4 text-sm text-primary-300">
										({calculateMonthlyEquivalent(pkg.yearlyPrice)}/mo equivalent)
									</p>
								{/if}
							</div>
							<div class="mb-6">
								<p class="px-4 text-lg font-medium text-primary-100">Additional benefits:</p>
								<ul class="px-4 space-y-2">
									{#each pkg.features as feature}
										<li class="flex items-start">
											<Icon
												icon="mdi:star"
												class="text-secondary-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
											/>
											<span class="text-primary-200">{feature}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
						<div class="p-6 border-t border-tertiary-600">
							<a
								href="/contact?package={encodeURIComponent(pkg.title)}"
								class="rounded-full block w-full py-3 px-4 bg-secondary-600 hover:bg-secondary-500 text-white font-medium rounded-xl text-center transition-colors duration-300"
							>
								Choose This Package
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section aria-labelledby="testimonials-heading" class="py-16 px-4 md:px-16">
		<div class="container mx-auto max-w-6xl">
			<div
				bind:this={testimonialHeadingRef}
				class="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
				class:visible={testimonialHeadingVisible}
			>
				<h2
					id="testimonials-heading"
					class="font-heading-token text-3xl md:text-5xl font-bold mb-4"
				>
					<span class="text-primary-50">Client</span>
					<span class="text-secondary-600"> Success Stories</span>
				</h2>
				<p class="text-xl text-primary-200 max-w-3xl mx-auto">
					Read what our clients have to say about their experience working with our design team.
				</p>
			</div>

			<div
				bind:this={testimonialGridRef}
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0 translate-y-10 transition-all duration-700 ease-out"
				class:visible={testimonialGridVisible}
			>
				{#each $enhancedTestimonials as testimonial, i (testimonial.id)}
					<article
						class="flex flex-col p-6 bg-primary-800 rounded-3xl border border-tertiary-600 transition-all duration-500 hover:border-tertiary-500"
						style:transition-delay={`${100 + i * 100}ms`}
					>
						<div class="flex items-center gap-4 mb-4">
							<img
								src={testimonial.image}
								alt={`${testimonial.name}`}
								class="w-16 h-16 rounded-full border-2 border-tertiary-500 object-cover"
								width="64"
								height="64"
								loading="lazy"
							/>
							<div>
								<h3 class="font-bold text-lg">{testimonial.name}</h3>
								<p class="text-sm text-primary-300">{testimonial.location}</p>
								<p class="text-sm text-primary-200">
									{testimonial.position}, {testimonial.company}
								</p>
							</div>
						</div>

						<div class="mb-3">
							<div class="flex mb-1">
								{#each Array(5) as _, star}
									<Icon
										icon={star < testimonial.rating ? 'mdi:star' : 'mdi:star-outline'}
										class="w-5 h-5 text-secondary-500"
										aria-hidden="true"
									/>
								{/each}
							</div>
							<p class="text-xs text-secondary-400 font-medium">{testimonial.projectType}</p>
						</div>

						<blockquote class="flex-grow">
							<p class="text-primary-100 leading-relaxed">"{testimonial.message}"</p>
						</blockquote>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section aria-labelledby="cta-heading" class="py-16 px-4 md:px-16 bg-primary-800">
		<div
			bind:this={ctaRef}
			class="container mx-auto max-w-4xl bg-gradient-to-br from-secondary-900 to-primary-900 rounded-3xl p-8 md:p-16 border border-tertiary-600 shadow-xl opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={ctaVisible}
		>
			<div class="text-center">
				<h2 id="cta-heading" class="font-heading-token mt-4 text-3xl md:text-4xl font-bold mb-4">
					Ready to transform your digital experience?
				</h2>
				<p class="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
					Book a free 30-minute consultation with our design experts to discuss your project needs
					and discover how we can help.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/contact"
						class="rounded-full mb-4 py-3 px-8 bg-secondary-600 hover:bg-secondary-500 text-white font-medium text-center transition-colors duration-300"
					>
						Book Free Consultation
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	:global(body) {
		background-color: theme('colors.primary.900');
	}

	/* Animation utility classes */
	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}

	button.active {
		color: white;
	}

	button:not(.active) {
		color: theme('colors.primary.300');
	}
</style>
