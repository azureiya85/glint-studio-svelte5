<script lang="ts">
	import Icon from '@iconify/svelte';
	import Navbar from '$lib/components/atom/Navbar.svelte';
	import { teamDetails } from '$lib/components/nerve/TeamDetails';

	// Element references for intersection observers
	let elements = $state({
		header: null as HTMLElement | null,
		description: null as HTMLElement | null,
		teamCards: [] as HTMLElement[]
	});

	// Visibility state for animations
	let visibility = $state({
		header: false,
		description: false,
		teamCards: Array(teamDetails.length).fill(false)
	});

	// Function to create an intersection observer
	function createObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.2
	) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					callback(true);
					observer.unobserve(node);
				}
			},
			{ threshold }
		);
		observer.observe(node);
		return observer;
	}

	// Setup observers with effect
	$effect(() => {
		const observers: IntersectionObserver[] = [];

		// Main sections
		if (elements.header)
			observers.push(createObserver(elements.header, () => (visibility.header = true)));

		if (elements.description)
			observers.push(createObserver(elements.description, () => (visibility.description = true)));

		// Team cards
		elements.teamCards.forEach((card, i) => {
			if (card)
				observers.push(
					createObserver(
						card,
						() => {
							visibility.teamCards[i] = true;
						},
						0.1
					)
				);
		});

		return () => observers.forEach((obs) => obs.disconnect());
	});
</script>

<Navbar />

<section
	aria-labelledby="team-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-gradient-to-b from-primary-700 to-primary-900"
>
	<div class="container mx-auto max-w-6xl">
		<!-- Header -->
		<header
			bind:this={elements.header}
			class="flex flex-col items-center text-center mb-16 animate-section"
			class:visible={visibility.header}
		>
			<h1
				id="team-heading"
				class="font-heading-token text-4xl md:text-6xl text-primary-50 font-bold"
			>
				get to know <br /> <span class="text-secondary-600">our team</span>
			</h1>
			<div class="w-24 h-1 bg-tertiary-500 mt-8 mb-10 overflow-hidden relative">
				<div
					class="absolute inset-0 bg-secondary-600 transition-transform duration-1000"
					class:visible={visibility.header}
				></div>
			</div>
		</header>

		<!-- Description -->
		<div
			bind:this={elements.description}
			class="text-center mb-16 max-w-3xl mx-auto animate-section"
			class:visible={visibility.description}
		>
			<p class="text-primary-100 text-lg mb-4">
				Our team of dedicated professionals brings diverse expertise and perspectives to create
				exceptional digital experiences that connect with people.
			</p>
			<p class="text-primary-100 text-lg">
				We're passionate about design, technology, and solving complex problems with creative
				solutions.
			</p>
		</div>

		<!-- Team Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each teamDetails as member, i}
				<article
					bind:this={elements.teamCards[i]}
					class="bg-primary-700 rounded-3xl border-2 border-tertiary-700 overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-tertiary-400 animate-card"
					class:visible={visibility.teamCards[i]}
					style="animation-delay: {i * 100}ms"
				>
					<!-- Header section with avatar, name, role, location -->
					<div class="p-6 text-left">
						<div class="flex items-start gap-4">
							<!-- Avatar with circular border -->
							<div class="flex-shrink-0">
								<img
									src={member.image}
									alt={`Photo of ${member.name}`}
									class="w-20 h-20 rounded-full object-cover border-2 border-tertiary-600"
									width="80"
									height="80"
									loading="lazy"
								/>
							</div>

							<!-- Name, role, location -->
							<div class="flex-grow">
								<h2 class="text-2xl font-bold text-secondary-600 mb-1">{member.name}</h2>
								<h3 class="text-lg font-bold text-primary-50 mb-1">{member.role}</h3>
								<p class="text-sm font-light text-primary-100">{member.location}</p>
							</div>
						</div>
					</div>

					<!-- Separator -->
					<div class="h-px bg-tertiary-400 w-80 mx-auto mb-4"></div>

					<!-- Expertise and Experience -->
					<div class="p-6 text-left">
						<p class="text-primary-50 mb-4">{member.expertise}</p>

						<!-- Experience timeline -->
						<div class="mb-4">
							{#each member.experience as exp}
								<div class="mb-2">
									<span class="text-primary-100">{exp.years}:</span>
									<span class="text-primary-50 font-bold"> {exp.position}</span>
								</div>
							{/each}
						</div>

						<!-- Thin separator before contact -->
						<div class="h-px bg-tertiary-400 w-full mb-4"></div>

						<!-- Contact section -->
						<h4 class="font-bold text-secondary-400 mb-2">Contact</h4>

						<div class="mb-1">
							<span class="text-primary-100">Email:</span>
							<span class="text-secondary-400"> {member.email}</span>
						</div>

						<div class="mb-4">
							<span class="text-primary-100">Phone:</span>
							<span class="text-secondary-400"> {member.phone}</span>
						</div>

						<!-- Social media icons -->
						<div class="flex gap-4">
							<a
								href={member.socials.twitter}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-100 hover:text-secondary-600 transition-colors"
								aria-label="Twitter profile"
							>
								<Icon icon="cib:twitter" width="24" height="24" />
							</a>
							<a
								href={member.socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-100 hover:text-secondary-600 transition-colors"
								aria-label="Instagram profile"
							>
								<Icon icon="cib:instagram" width="24" height="24" />
							</a>
							<a
								href={member.socials.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-100 hover:text-secondary-600 transition-colors"
								aria-label="LinkedIn profile"
							>
								<Icon icon="cib:linkedin" width="24" height="24" />
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Call to Action -->
		<div class="text-center mt-12 mb-8 animate-section" class:visible={visibility.description}>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 text-lg font-semibold text-white bg-secondary-600 px-6 py-3 border border-tertiary-600 rounded-full shadow-md hover:shadow-2xl hover:bg-secondary-500 transition-all"
			>
				<Icon icon="mdi:email-fast" class="text-primary-100 w-5 h-5" aria-hidden="true" />
				Get in touch with our team!
			</a>
		</div>
	</div>
</section>

<style>
	.animate-section {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	.animate-card {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.absolute.inset-0.bg-secondary-600 {
		transform: translateX(-100%);
	}

	.absolute.inset-0.bg-secondary-600.visible {
		transform: translateX(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.animate-section,
		.animate-card {
			transition: none;
			transform: none;
			opacity: 1;
		}
	}
</style>
