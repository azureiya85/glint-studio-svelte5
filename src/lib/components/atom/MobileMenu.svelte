<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
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
			<a href="/test" class="nav-link">Test</a>
			<hr class="border-gray-700 w-full my-2" />
			<div class="flex flex-col space-y-2">
				<a href="/login" class="nav-link">Login</a>
				<a
					href="/login"
					class="text-secondary-400 text-lg font-semibold hover:text-secondary-300 transition-opacity"
				>
					Sign Up
				</a>
			</div>
		</nav>
	</div>
</div>
