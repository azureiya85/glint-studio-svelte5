<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount, tick } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faPalette,
		faInfoCircle,
		faUsers,
		faCogs,
		faBars
	} from '@fortawesome/free-solid-svg-icons';

	let visible = false;
	let scrolled = false;
	let mobileMenuOpen = false;
	let section;

	// Fly animation settings (reducing redundancy)
	const flyAnimation = { y: 20, duration: 1000 };

	// Run on Component Mount
	onMount(() => {
		// Intersection Observer for Hero Section Animation
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

		// Scroll Event for Navbar Background Change
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener on destroy
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Toggle Mobile Menu
	const toggleMobileMenu = () => (mobileMenuOpen = !mobileMenuOpen);
</script>

<!-- ==== Header / Navbar ==== -->
<header
	class="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center transition-all duration-300 z-[50]"
	class:backdrop-blur-lg={scrolled}
	class:bg-opacity-80={scrolled}
>
	<!-- Left: Logo & Name -->
	<div class="flex items-center gap-3">
		<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
		<span class="text-white text-xl font-semibold tracking-wide">designer</span>
	</div>

	<!-- Right: Desktop Navigation -->
	<nav class="hidden md:flex items-center gap-6">
		<a href="/blog" class="nav-link">Blog</a>
		<a href="/pricing" class="nav-link">Pricing</a>

		<!-- Separator -->
		<span class="text-white opacity-50">|</span>

		<a href="/login" class="nav-link">Login</a>
		<a
			href="/signup"
			class="px-6 py-2 mr-5 bg-primary-800 hover:bg-secondary-600 text-white rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
		>
			Sign Up
		</a>
	</nav>

	<!-- Mobile Menu Button -->
	<button class="md:hidden text-white text-2xl" on:click={toggleMobileMenu}>
		<FontAwesomeIcon icon={faBars} />
	</button>
</header>

<!-- ==== Mobile Sidebar Menu ==== -->
{#if mobileMenuOpen}
	<div
		role="presentation"
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-[100]"
		on:click={toggleMobileMenu}
		in:fade={{ duration: 400 }}
		out:fade={{ duration: 300, delay: 200 }}
	>
		<!-- Sidebar -->
		<div
			role="presentation"
			class="fixed top-0 right-0 h-full w-1/3 max-w-xs bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col items-start p-6 space-y-4 z-[101]"
			class:translate-x-full={!mobileMenuOpen}
			on:click={(e) => e.stopPropagation()}
		>
			<!-- Close Button -->
			<button class="self-end text-white text-2xl" on:click={toggleMobileMenu}>×</button>

			<!-- Menu Links -->
			<nav class="flex flex-col space-y-3 w-full">
				<a href="/blog" class="nav-link">Blog</a>
				<a href="/pricing" class="nav-link">Pricing</a>

				<!-- Separator -->
				<hr class="border-gray-700 w-full my-2" />

				<!-- Login & Sign Up Group -->
				<div class="flex flex-col space-y-2">
					<a href="/login" class="nav-link">Login</a>
					<a
						href="/signup"
						class="text-secondary-400 text-lg font-semibold hover:text-secondary-300 transition-opacity"
					>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	</div>
{/if}

<!-- ==== Hero Section ==== -->
<section
	aria-labelledby="hero-title"
	class="relative w-screen h-screen min-h-[600px] flex flex-col items-center justify-center px-6 text-center"
>
	<!-- Optimized Background Image -->
	<div
		class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/your-image.jpg')] bg-cover bg-center"
	></div>

	<!-- Hero Content -->
	<div class="relative text-white max-w-2xl" in:fade={{ duration: 800 }}>
		<!-- SEO-Optimized Heading -->
		<h1 id="hero-title" class="text-4xl sm:text-5xl font-heading-token font-bold">
			<span class="text-primary-50">build a better web</span><br />
			<span class="text-secondary-500">build a better future</span>
		</h1>

		<!-- Hero Subtitle -->
		<p class="mt-4 text-lg sm:text-xl leading-relaxed" in:fly={{ ...flyAnimation, delay: 200 }}>
			We help people to create a more responsive, adaptive, and accessible web experience.
		</p>

		<!-- CTA Buttons -->
		<div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/about"
				class="flex items-center gap-2 bg-primary-800 hover:bg-primary-600 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900"
				in:fly={{ ...flyAnimation, delay: 400 }}
			>
				<FontAwesomeIcon icon={faInfoCircle} class="w-5 h-5" />
				About Us
			</a>
			<a
				href="/team"
				class="flex items-center gap-2 bg-primary-800 hover:bg-secondary-600 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900"
				in:fly={{ ...flyAnimation, delay: 600 }}
			>
				<FontAwesomeIcon icon={faUsers} class="w-5 h-5" />
				Our Team
			</a>
			<a
				href="/services"
				class="flex items-center gap-2 bg-primary-800 hover:bg-tertiary-600 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-2xlshadow-2xl hover:shadow-primary-900"
				in:fly={{ ...flyAnimation, delay: 800 }}
			>
				<FontAwesomeIcon icon={faCogs} class="w-5 h-5" />
				Our Services
			</a>
		</div>
	</div>
</section>

<style>
	a.nav-link {
		@apply text-white text-lg hover:opacity-80 transition-opacity;
	}
</style>
