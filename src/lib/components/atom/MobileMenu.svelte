<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { authStore } from '$lib/stores/auth';

	const dispatch = createEventDispatcher();

	// Use $derived to automatically update when auth state changes
	// This will reactively update the menu when user logs in or out
	let isAuthenticated = $derived(!!$authStore);

	// Handle logout
	async function handleLogout() {
		await authStore.logout();
		dispatch('close');
	}
</script>

<div
	role="presentation"
	class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-[100]"
	onclick={() => dispatch('close')}
	in:fade={{ duration: 400 }}
	out:fade={{ duration: 300, delay: 200 }}
>
	<div
		role="presentation"
		class="fixed top-0 right-0 h-full w-1/3 max-w-xs bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col items-start p-6 space-y-4 z-[101]"
		onclick={(e) => e.stopPropagation()}
	>
		<button class="self-end text-white text-2xl" onclick={() => dispatch('close')}>×</button>
		<nav class="flex flex-col space-y-3 w-full">
			<a href="/blog" class="nav-link">Blog</a>
			<a href="/pricing" class="nav-link">Pricing</a>
			<a href="/protected/test" class="nav-link">Test</a>
			<hr class="border-gray-700 w-full my-2" />

			{#if isAuthenticated}
				<!-- Show these links when user is logged in -->
				<span class="text-white text-lg">Hello, {$authStore?.username}</span>
				<button
					onclick={handleLogout}
					class="text-primary-300 text-left text-lg font-semibold hover:text-primary-200 transition-colors"
				>
					Sign Out
				</button>
			{:else}
				<!-- Show these links when user is logged out -->
				<a href="/login" class="nav-link">Login</a>
				<a
					href="/register"
					class="text-secondary-400 text-lg font-semibold hover:text-secondary-300 transition-colors"
				>
					Sign Up
				</a>
			{/if}
		</nav>
	</div>
</div>

<style>
	.nav-link {
		@apply text-white text-lg hover:text-secondary-400 transition-colors;
	}
</style>
