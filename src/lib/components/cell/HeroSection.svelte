<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount, tick } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faInfoCircle, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';
	import Navbar from '$lib/components/atom/Navbar.svelte';

	let visible = false;
	let section;

	const flyAnimation = { y: 20, duration: 1000 };

	onMount(() => {
		if (section) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						visible = true;
						tick();
						observer.disconnect();
					}
				},
				{ threshold: 0.3 }
			);
			observer.observe(section);
		}
	});
</script>

<Navbar />

<section
	aria-labelledby="hero-title"
	class="relative w-screen h-screen min-h-[600px] flex flex-col items-center justify-center px-6 text-center"
>
	<div
		class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/image/background_hero_4x.png')] bg-cover bg-center"
	></div>
	<div class="relative text-white max-w-2xl" in:fade={{ duration: 800 }}>
		<h1 id="hero-title" class="text-4xl sm:text-5xl font-heading-token font-bold">
			<span class="text-primary-50">build a better web</span><br />
			<span class="text-secondary-500">build a better future</span>
		</h1>
		<p class="mt-4 text-lg sm:text-xl leading-relaxed" in:fly={{ ...flyAnimation, delay: 200 }}>
			We help people to create a more responsive, adaptive, and accessible web experience.
		</p>
		<div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/about" class="cta-button" in:fly={{ ...flyAnimation, delay: 400 }}>
				<FontAwesomeIcon icon={faInfoCircle} class="w-5 h-5" /> About Us
			</a>
			<a href="/services" class="cta-button-main" in:fly={{ ...flyAnimation, delay: 800 }}>
				<FontAwesomeIcon icon={faCogs} class="w-5 h-5" /> Our Services
			</a>
			<a href="/team" class="cta-button" in:fly={{ ...flyAnimation, delay: 600 }}>
				<FontAwesomeIcon icon={faUsers} class="w-5 h-5" /> Our Team
			</a>
		</div>
	</div>
</section>
