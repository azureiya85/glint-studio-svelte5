<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { teamMembers } from '$lib/components/nerve/TeamMembers';
	import { milestones } from '$lib/components/nerve/Milestones';
	import Navbar from '$lib/components/atom/Navbar.svelte';

	interface TeamMemberWithImage {
		name: string;
		role: string;
		quirk: string;
		image?: string;
	}

	let teamMembersWithImages: TeamMemberWithImage[] = teamMembers.map((member) => ({ ...member })); // Initial value

	let headerVisible = false;
	let aboutTextVisible = false;
	let valuesVisible = false;
	let timelineVisible = false;
	let timelineItemsVisible = Array(milestones.length).fill(false);
	let teamVisible = false;
	let teamMembersVisible = Array(teamMembers.length).fill(false);

	let headerContainer: HTMLElement;
	let aboutTextContainer: HTMLElement;
	let valuesContainer: HTMLElement;
	let timelineContainer: HTMLElement;
	let timelineItemContainers: HTMLElement[] = [];
	let teamContainer: HTMLElement;
	let teamMemberContainers: HTMLElement[] = [];

	async function fetchTeamImages() {
		try {
			const response = await fetch(`https://randomuser.me/api/?results=${teamMembers.length}`);
			const data = await response.json();

			teamMembersWithImages = teamMembers.map((member, index) => ({
				...member,
				image: data.results[index].picture.large
			}));
		} catch (error) {
			console.error('Error fetching random user images:', error);
			// Keep the initial value if fetch fails
		}
	}

	onMount(() => {
		// Start fetching images when component mounts
		fetchTeamImages();

		const observers: IntersectionObserver[] = [];

		if (headerContainer) {
			observers.push(
				createVisibilityObserver(headerContainer, (visible) => {
					headerVisible = visible;
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

		if (timelineContainer) {
			observers.push(
				createVisibilityObserver(
					timelineContainer,
					(visible) => {
						timelineVisible = visible;
					},
					0.1
				)
			);
		}

		timelineItemContainers.forEach((container, index) => {
			if (container) {
				observers.push(
					createVisibilityObserver(
						container,
						(visible) => {
							setTimeout(
								() => {
									timelineItemsVisible[index] = visible;
									timelineItemsVisible = [...timelineItemsVisible];
								},
								300 + index * 200
							);
						},
						0.1
					)
				);
			}
		});

		if (teamContainer) {
			observers.push(
				createVisibilityObserver(teamContainer, (visible) => {
					teamVisible = visible;
				})
			);
		}

		teamMemberContainers.forEach((container, index) => {
			if (container) {
				observers.push(
					createVisibilityObserver(
						container,
						(visible) => {
							setTimeout(
								() => {
									teamMembersVisible[index] = visible;
									teamMembersVisible = [...teamMembersVisible];
								},
								400 + index * 150
							);
						},
						0.1
					)
				);
			}
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	});

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
						observer.unobserve(node);
					}
				});
			},
			{ threshold, rootMargin }
		);
		observer.observe(node);
		return observer;
	}
</script>

<Navbar />

<section
	aria-labelledby="company-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-gradient-to-b from-primary-700 to-primary-900"
>
	<div class="min-h-screen container mx-auto max-w-6xl">
		<!-- Heading Container with Animation -->
		<div
			bind:this={headerContainer}
			class="flex flex-col justify-center items-center text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={headerVisible}
		>
			<h1
				id="company-heading"
				class="font-heading-token text-4xl md:text-6xl text-primary-50 font-bold"
			>
				not your typical <br /> <span class="text-secondary-600">design studio</span>
			</h1>
			<div class="relative w-24 h-1 bg-tertiary-500 mt-8 mb-10 overflow-hidden">
				<div
					class="absolute left-0 top-0 w-full h-full bg-secondary-600 transform transition-transform duration-1000"
					style={headerVisible ? 'transform: translateX(0);' : 'transform: translateX(-100%);'}
				></div>
			</div>
			<h4 class="text-3xl md:text-4xl font-bold text-secondary-600 text-center">About Us</h4>
		</div>

		<!-- About Text with Animation -->
		<div
			bind:this={aboutTextContainer}
			class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={aboutTextVisible}
			style="transition-delay: 400ms;"
		>
			<div class="text-primary-100 text-lg">
				<p class="mb-6">
					Founded in 2018, we started with a simple idea: what if digital design was less about
					rigid grids and more about human connection? What if websites and apps could feel as
					intuitive as a conversation with a friend?
				</p>
				<p>
					Since then, we've grown from a two-person operation in a cramped apartment to a diverse
					team of designers, developers, and strategists—all united by our quirky approach to making
					the web a more joyful place.
				</p>
			</div>
			<div class="text-primary-100 text-lg">
				<p class="mb-6">
					We believe the best digital experiences happen when creativity meets functionality. That's
					why our design process embraces the unexpected, the playful, and sometimes even the weird.
				</p>
				<p>
					Our clients choose us because we don't just build websites—we create digital spaces that
					feel alive, responsive, and distinctly human.
				</p>
			</div>
		</div>

		<!-- Core Values -->
		<div
			bind:this={valuesContainer}
			class="mb-24 opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={valuesVisible}
		>
			<h2 class="text-3xl md:text-4xl font-bold text-secondary-600 mb-8 text-center">
				Our Core Values
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div
					class="p-6 bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg transform transition-all duration-500 hover:-translate-y-2"
				>
					<div
						class="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-600 mb-4"
					>
						<Icon icon="mdi:lightbulb-on" class="text-primary-100 w-6 h-6" aria-hidden="true" />
					</div>
					<h3 class="text-xl font-bold text-primary-100 mb-2">Creativity First</h3>
					<p class="text-primary-100">
						We embrace unconventional thinking and believe the most interesting solutions come from
						asking "what if?" instead of "what's been done before?"
					</p>
				</div>
				<div
					class="p-6 bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg transform transition-all duration-500 hover:-translate-y-2"
				>
					<div
						class="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-600 mb-4"
					>
						<Icon icon="mdi:human-greeting" class="text-primary-100 w-6 h-6" aria-hidden="true" />
					</div>
					<h3 class="text-xl font-bold text-primary-100 mb-2">Human-Centered</h3>
					<p class="text-primary-100">
						Behind every screen is a person. We design for humans first, algorithms second, always
						prioritizing real experiences over theoretical best practices.
					</p>
				</div>
				<div
					class="p-6 bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg transform transition-all duration-500 hover:-translate-y-2"
				>
					<div
						class="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-600 mb-4"
					>
						<Icon icon="mdi:hand-heart" class="text-primary-100 w-6 h-6" aria-hidden="true" />
					</div>
					<h3 class="text-xl font-bold text-primary-100 mb-2">Purposeful Fun</h3>
					<p class="text-primary-100">
						We believe good design should delight. Our work balances functionality with moments of
						joy, surprise, and personality that turn users into fans.
					</p>
				</div>
			</div>
		</div>

		<!-- Timeline Section -->
		<div bind:this={timelineContainer} class="mb-24">
			<h2
				class="text-3xl md:text-4xl font-bold text-secondary-600 mb-12 text-center opacity-0 transition-all duration-500"
				class:visible={timelineVisible}
			>
				Our Journey So Far
			</h2>
			<div class="relative">
				<div
					class="absolute left-4 md:left-1/2 top-0 w-1 bg-tertiary-600 h-full transform md:translate-x-[-50%] opacity-0 transition-all duration-700 ease-in"
					class:visible={timelineVisible}
					style="transition-delay: 200ms;"
				></div>
				{#each milestones as milestone, i}
					<div
						bind:this={timelineItemContainers[i]}
						class="relative flex flex-col md:flex-row md:even:flex-row-reverse items-center md:items-start mb-16 last:mb-0 opacity-0 translate-y-10 transition-all duration-500"
						class:visible={timelineItemsVisible[i]}
						style="transition-delay: {300 + i * 200}ms;"
					>
						<div
							class="absolute left-4 md:left-1/2 w-8 h-8 bg-secondary-600 rounded-full border-4 border-primary-800 transform translate-x-[-50%] flex items-center justify-center z-10"
						>
							<Icon icon={milestone.icon} class="text-primary-100 w-4 h-4" aria-hidden="true" />
						</div>
						<div class="ml-16 md:ml-0 md:w-5/12 p-4">
							<div class="bg-primary-800 p-6 rounded-3xl border border-tertiary-600 shadow-lg">
								<span class="text-secondary-500 font-bold text-2xl block mb-2"
									>{milestone.year}</span
								>
								<h3 class="text-xl font-bold text-primary-100 mb-2">{milestone.title}</h3>
								<p class="text-primary-100">{milestone.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Team Section -->
		<div bind:this={teamContainer} class="mb-16">
			<h2
				class="text-3xl md:text-4xl font-bold text-secondary-600 mb-8 text-center opacity-0 transition-all duration-500"
				class:visible={teamVisible}
			>
				Meet Our Team
			</h2>
			<p
				class="text-center text-primary-100 text-lg mb-12 max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-500"
				class:visible={teamVisible}
				style="transition-delay: 200ms;"
			>
				We're a diverse bunch of creative problem-solvers who bring our unique perspectives, odd
				hobbies, and pet design theories to every project.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{#each teamMembersWithImages as member, i}
					<div
						bind:this={teamMemberContainers[i]}
						class="bg-primary-800 rounded-3xl border border-tertiary-600 overflow-hidden shadow-lg opacity-0 translate-y-10 transition-all duration-500 transform hover:-translate-y-2"
						class:visible={teamMembersVisible[i]}
						style="transition-delay: {400 + i * 150}ms;"
					>
						<div class="relative h-48 overflow-hidden">
							<img
								src={member.image || '/api/placeholder/100/100'}
								alt={`Photo of ${member.name}`}
								class="w-full h-full object-cover"
								width="240"
								height="240"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-70"
							></div>
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold text-primary-100">{member.name}</h3>
							<p class="text-secondary-500 font-medium mb-2">{member.role}</p>
							<p class="text-primary-100 text-sm italic">"{member.quirk}"</p>
						</div>
					</div>
				{/each}
			</div>
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
	}
</style>
