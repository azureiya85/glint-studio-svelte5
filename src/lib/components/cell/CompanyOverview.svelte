<script lang="ts">
	import Icon from '@iconify/svelte';
	import { teamMembers } from '$lib/components/nerve/TeamMembers';
	import { milestones } from '$lib/components/nerve/Milestones';
	import Navbar from '$lib/components/atom/Navbar.svelte';

	// Define types
	type TeamMember = {
		name: string;
		role: string;
		quirk: string;
		image?: string;
	};

	// Reactive state with runes
	let teamMembersWithImages = $state<TeamMember[]>([]);
	let visibility = $state({
		header: false,
		about: false,
		values: false,
		timeline: false,
		timelineItems: Array(milestones.length).fill(false),
		team: false,
		teamMembers: Array(teamMembers.length).fill(false)
	});

	// Element references
	let elements = $state({
		header: null as HTMLElement | null,
		about: null as HTMLElement | null,
		values: null as HTMLElement | null,
		timeline: null as HTMLElement | null,
		timelineItems: [] as HTMLElement[],
		team: null as HTMLElement | null,
		teamMembers: [] as HTMLElement[]
	});

	// Fetch team images
	async function fetchTeamImages() {
		try {
			const response = await fetch(`https://randomuser.me/api/?results=${teamMembers.length}`);
			const data = await response.json();
			teamMembersWithImages = teamMembers.map((member, i) => ({
				...member,
				image: data.results[i].picture.large
			}));
		} catch (error) {
			console.error('Error fetching team images:', error);
			teamMembersWithImages = teamMembers;
		}
	}

	// Single observer factory
	function createObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.3
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
		fetchTeamImages();
		const observers: IntersectionObserver[] = [];

		// Main sections
		if (elements.header)
			observers.push(createObserver(elements.header, () => (visibility.header = true)));
		if (elements.about)
			observers.push(createObserver(elements.about, () => (visibility.about = true), 0.1));
		if (elements.values)
			observers.push(createObserver(elements.values, () => (visibility.values = true)));
		if (elements.timeline)
			observers.push(createObserver(elements.timeline, () => (visibility.timeline = true), 0.1));
		if (elements.team)
			observers.push(createObserver(elements.team, () => (visibility.team = true)));

		// Timeline items
		elements.timelineItems.forEach((item, i) => {
			if (item)
				observers.push(
					createObserver(
						item,
						() => {
							visibility.timelineItems[i] = true;
						},
						0.1
					)
				);
		});

		// Team members
		elements.teamMembers.forEach((item, i) => {
			if (item)
				observers.push(
					createObserver(
						item,
						() => {
							visibility.teamMembers[i] = true;
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
	aria-labelledby="company-heading"
	class="relative min-h-screen py-16 px-4 md:px-16 bg-gradient-to-b from-primary-700 to-primary-900"
>
	<div class="container mx-auto max-w-6xl">
		<!-- Header -->
		<header
			bind:this={elements.header}
			class="flex flex-col items-center text-center mb-16 {visibility.header ? 'visible' : ''}"
		>
			<h1
				id="company-heading"
				class="font-heading-token text-4xl md:text-6xl text-primary-50 font-bold"
			>
				not your typical <br /> <span class="text-secondary-600">design studio</span>
			</h1>
			<div class="w-24 h-1 bg-tertiary-500 mt-8 mb-10 overflow-hidden relative">
				<div
					class="absolute inset-0 bg-secondary-600 transition-transform duration-1000"
					class:visible={visibility.header}
				></div>
			</div>
			<h4 class="text-3xl md:text-4xl font-bold text-secondary-600">About Us</h4>
		</header>

		<!-- About -->
		<div
			bind:this={elements.about}
			class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-primary-100 text-lg {visibility.about
				? 'visible'
				: ''}"
		>
			<div>
				<p class="mb-6">
					Founded in 2018, we started with a simple idea: making digital design about human
					connection rather than rigid grids.
				</p>
				<p>
					From a two-person team in a small apartment, we've grown into a diverse group of
					designers, developers, and strategists.
				</p>
			</div>
			<div>
				<p class="mb-6">
					We blend creativity with functionality to create exceptional digital experiences.
				</p>
				<p>Our clients choose us for digital spaces that feel alive, responsive, and human.</p>
			</div>
		</div>

		<!-- Values -->
		<section bind:this={elements.values} class="mb-24 {visibility.values ? 'visible' : ''}">
			<h2 class="text-3xl md:text-4xl font-bold text-secondary-600 mb-8 text-center">
				Our Core Values
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each [{ icon: 'mdi:lightbulb-on', title: 'Creativity First', desc: 'We embrace unconventional thinking for innovative solutions.' }, { icon: 'mdi:human-greeting', title: 'Human-Centered', desc: 'We design for people first, prioritizing real experiences.' }, { icon: 'mdi:hand-heart', title: 'Purposeful Fun', desc: 'Our designs balance function with joy and personality.' }] as value}
					<article
						class="p-6 bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg hover:-translate-y-2 transition-transform"
					>
						<div class="w-12 h-12 rounded-full bg-secondary-600 mb-4 flex-center">
							<Icon icon={value.icon} class="text-primary-100 w-6 h-6" aria-hidden="true" />
						</div>
						<h3 class="text-xl font-bold text-primary-100 mb-2">{value.title}</h3>
						<p class="text-primary-100">{value.desc}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- Timeline -->
		<section bind:this={elements.timeline} class="mb-24">
			<h2
				class="text-3xl md:text-4xl font-bold text-secondary-600 mb-12 text-center {visibility.timeline
					? 'visible'
					: ''}"
			>
				Our Journey So Far
			</h2>
			<div class="relative">
				<div
					class="absolute left-4 md:left-1/2 w-1 bg-tertiary-600 h-full md:-translate-x-1/2 {visibility.timeline
						? 'visible'
						: ''}"
				></div>
				{#each milestones as milestone, i}
					<article
						bind:this={elements.timelineItems[i]}
						class="relative flex flex-col md:flex-row md:even:flex-row-reverse items-center mb-16 last:mb-0 {visibility
							.timelineItems[i]
							? 'visible'
							: ''}"
					>
						<div
							class="absolute left-4 md:left-1/2 w-8 h-8 bg-secondary-600 rounded-full border-4 border-primary-800 -translate-x-1/2 flex-center z-10"
						>
							<Icon icon={milestone.icon} class="text-primary-100 w-4 h-4" aria-hidden="true" />
						</div>
						<div class="ml-16 md:ml-0 md:w-5/12 p-4">
							<div class="bg-primary-800 p-6 rounded-3xl border border-tertiary-600 shadow-lg">
								<time class="text-secondary-500 font-bold text-2xl block mb-2"
									>{milestone.year}</time
								>
								<h3 class="text-xl font-bold text-primary-100 mb-2">{milestone.title}</h3>
								<p class="text-primary-100">{milestone.description}</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<!-- Team -->
		<section bind:this={elements.team} class="mb-16">
			<h2
				class="text-3xl md:text-4xl font-bold text-secondary-600 mb-8 text-center {visibility.team
					? 'visible'
					: ''}"
			>
				Meet Our Team
			</h2>
			<p
				class="text-center text-primary-100 text-lg mb-12 max-w-2xl mx-auto {visibility.team
					? 'visible'
					: ''}"
			>
				A diverse team of creative problem-solvers bringing unique perspectives to every project.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{#each teamMembersWithImages as member, i}
					<article
						bind:this={elements.teamMembers[i]}
						class="bg-primary-800 rounded-3xl border border-tertiary-600 shadow-lg hover:-translate-y-2 transition-transform {visibility
							.teamMembers[i]
							? 'visible'
							: ''}"
					>
						<figure class="relative h-48 overflow-hidden">
							<img
								src={member.image || '/api/placeholder/100/100'}
								alt={`Photo of ${member.name}`}
								class="w-full h-full object-cover"
								width="240"
								height="240"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-70"
							></div>
						</figure>
						<div class="p-6">
							<h3 class="text-xl font-bold text-primary-100">{member.name}</h3>
							<p class="text-secondary-500 font-medium mb-2">{member.role}</p>
							<p class="text-primary-100 text-sm italic">"{member.quirk}"</p>
						</div>
					</article>
				{/each}
			</div>
		</section>
	</div>
</section>

<style>
	.visible {
		opacity: 1;
		transform: translateY(0);
	}

	header,
	article,
	section > h2,
	section > p {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
	}

	.visible header,
	.visible article,
	.visible h2,
	.visible p {
		opacity: 1;
		transform: translateY(0);
	}

	.absolute.inset-0.bg-secondary-600 {
		transform: translateX(-100%);
	}

	.absolute.inset-0.bg-secondary-600.visible {
		transform: translateX(0);
	}

	.flex-center {
		@apply flex items-center justify-center;
	}

	@media (prefers-reduced-motion: reduce) {
		.visible,
		header,
		article,
		section > h2,
		section > p {
			transition: none;
			transform: none;
			opacity: 1;
		}
	}
</style>
