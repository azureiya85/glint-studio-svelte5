<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';

	// Create state for form fields
	let username = $state('');
	let password = $state('');
	let isLoading = $state(false);

	// Get toast store for notifications
	const toastStore = getToastStore();

	// Toast notifications
	const loginFail: ToastSettings = {
		message: 'Login failed. Please try again.',
		background: 'variant-filled-error'
	};

	const loginSuccess: ToastSettings = {
		message: 'Login successful!',
		background: 'bg-success-700'
	};

	// Handle login form submission
	async function handleLogin(event: Event) {
		event.preventDefault();
		isLoading = true;

		const result = await authStore.login(username, password);

		isLoading = false;

		if (result.success) {
			toastStore.trigger(loginSuccess);
			goto('/');
		} else {
			toastStore.trigger(loginFail);
		}
	}

	// Handle logout
	async function handleLogout() {
		await authStore.logout();
		goto('/login');
	}
</script>

<form class="w-full mt-6 space-y-4" onsubmit={handleLogin}>
	<label class="block text-sm font-medium text-slate-200">
		Username
		<input
			type="text"
			placeholder="Enter your username..."
			class="input-field"
			bind:value={username}
			required
		/>
	</label>

	<label class="block text-sm font-medium text-slate-200">
		Password
		<input
			type="password"
			placeholder="Enter your password..."
			class="input-field"
			bind:value={password}
			required
		/>
	</label>

	<button
		type="submit"
		class="w-full rounded-full social-button bg-secondary-700 hover:bg-secondary-800 h-12 border border-tertiary-800"
		disabled={isLoading}
	>
		{isLoading ? 'Logging in...' : 'Login'}
	</button>

	<button
		type="button"
		class="w-full rounded-full social-button bg-primary-800 hover:bg-primary-900 h-12 border border-tertiary-800"
		onclick={handleLogout}
	>
		Logout
	</button>
</form>

<style>
	.input-field {
		background: #1e293b;
		box-shadow: 0 0 0 1px #7c70a0;
		width: 100%;
		color: #edeafa;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		border: none;
		outline: none;
		transition: box-shadow 0.2s;
	}

	.input-field:focus {
		box-shadow: 0 0 0 2px #b2a1e3;
	}
</style>
