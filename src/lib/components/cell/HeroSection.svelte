<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Navbar from '$lib/components/atom/Navbar.svelte';

	// Reactive state using runes
	let visible = $state(false);

	// Element reference
	let section: HTMLElement | undefined;

	// Animation configuration
	const flyAnimation = { y: 20, duration: 1000 };

	// Setup intersection observer with $effect
	$effect(() => {
		if (!section) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(section);

		// Cleanup
		return () => observer.disconnect();
	});
</script>

<Navbar />

<section
	aria-labelledby="hero-title"
	class="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center px-6 text-center"
	bind:this={section}
>
	<div
		class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/image/background_hero_4x.png')] bg-cover bg-center"
	></div>

	{#if visible}
		<div class="relative text-white max-w-3xl" in:fade={{ duration: 800 }}>
			<h1 id="hero-title" class="text-4xl sm:text-7xl font-heading-token font-bold">
				<span class="text-primary-50">build a better web</span><br />
				<span class="text-secondary-500">build a better future</span>
			</h1>
			<p class="mt-4 text-lg sm:text-3xl leading-relaxed" in:fly={{ ...flyAnimation, delay: 200 }}>
				We help people to create a more responsive, adaptive, and accessible web experience.
			</p>
			<div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/about"
					class="cta-button"
					in:fly={{ ...flyAnimation, delay: 400 }}
					aria-label="Learn more about our company"
				>
					<Icon icon="mdi-light:home" class="text-primary-100 w-5 h-5" aria-hidden="true" />
					About Us
				</a>
				<a
					href="/services"
					class="cta-button-main"
					in:fly={{ ...flyAnimation, delay: 800 }}
					aria-label="Explore our services"
				>
					<Icon icon="mdi-light:home" class="text-primary-100 w-5 h-5" aria-hidden="true" />
					Our Services
				</a>
				<a
					href="/team"
					class="cta-button cta-tertiary"
					in:fly={{ ...flyAnimation, delay: 600 }}
					aria-label="Meet our team"
				>
					<Icon icon="mdi-light:home" class="text-primary-100 w-5 h-5" aria-hidden="true" />
					Our Team
				</a>
			</div>
		</div>
	{/if}
</section>

<style>
	.cta-button {
		@apply text-2xl bg-primary-800 flex border-[1px] border-tertiary-900 items-center gap-2 px-6 py-3 text-white rounded-3xl transition-all transform hover:-translate-y-1 hover:bg-primary-700 shadow-md hover:shadow-lg;
	}

	.cta-button-main {
		@apply text-2xl font-semibold bg-secondary-700 flex border-[1px] border-tertiary-500 items-center gap-2 px-6 py-3 text-white rounded-3xl transition-all transform hover:-translate-y-1 hover:bg-secondary-600 shadow-md hover:shadow-lg;
	}

	.cta-tertiary {
		@apply hover:bg-tertiary-600;
	}
</style>
