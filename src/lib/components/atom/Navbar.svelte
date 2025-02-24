<script lang="ts">
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPalette, faBars } from '@fortawesome/free-solid-svg-icons';
	import MobileMenu from './MobileMenu.svelte';

	let scrolled = false;
	let mobileMenuOpen = false;

	const toggleMobileMenu = () => (mobileMenuOpen = !mobileMenuOpen);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center transition-all duration-300 z-[50]"
	class:backdrop-blur-lg={scrolled}
	class:bg-opacity-80={scrolled}
>
	<div class="flex items-center gap-3">
		<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
		<span class="text-white text-xl font-semibold tracking-wide">designer</span>
	</div>

	<nav class="hidden md:flex items-center gap-6">
		<a href="/blog" class="nav-link">Blog</a>
		<a href="/pricing" class="nav-link">Pricing</a>
		<a href="/test" class="nav-link">Test</a>
		<span class="text-white opacity-50">|</span>
		<a href="/login" class="nav-link">Login</a>
		<a
			href="/login"
			class="px-6 py-2 mr-5 bg-primary-800 border border-tertiary-900 hover:bg-secondary-600 text-white rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
		>
			Sign Up
		</a>
	</nav>

	<button class="md:hidden text-white text-2xl" on:click={toggleMobileMenu}>
		<FontAwesomeIcon icon={faBars} />
	</button>

	{#if mobileMenuOpen}
		<MobileMenu on:close={toggleMobileMenu} />
	{/if}
</header>

<style>
	a.nav-link {
		@apply text-primary-50 text-lg hover:text-secondary-400 transition-colors;
	}
</style>
