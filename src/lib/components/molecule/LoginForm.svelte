<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const toastStore = getToastStore();

	const loginFail: ToastSettings = {
		message: 'Login failed. Please try again.',
		background: 'variant-filled-error',
		classes: 'rounded-base-token'
	};

	const loginSuccess: ToastSettings = {
		message: 'Login successful!',
		background: 'bg-success-700',
		classes: 'bg-success-700'
	};

	let username = writable('');
	let password = writable('');
	let isLoading = writable(false);

	async function handleLogin(event: Event) {
		event.preventDefault();

		const credentials = {
			username: 'agus123',
			password: 'handless'
		};

		if ($username === credentials.username && $password === credentials.password) {
			toastStore.trigger(loginSuccess);
			isLoading.set(true);
			setTimeout(() => {
				isLoading.set(false);
				goto('/');
			}, 2000);
		} else {
			toastStore.trigger(loginFail);
		}
	}
</script>

<form class="w-full mt-6 space-y-4" onsubmit={handleLogin}>
	<label class="block text-sm font-medium text-slate-200">
		Username
		<input
			type="text"
			placeholder="Enter your username..."
			class="input-field"
			bind:value={$username}
			required
		/>
	</label>

	<label class="block text-sm font-medium text-slate-200">
		Password
		<input
			type="password"
			placeholder="Enter your password..."
			class="input-field"
			bind:value={$password}
			required
		/>
	</label>

	<button
		type="submit"
		class="w-full rounded-full social-button bg-secondary-700 hover:bg-secondary-800 h-12 border border-tertiary-800"
	>
		Login
	</button>
	<p class="text-center">
		Don't have an account? <span class="font-medium text-secondary-600 underline"
			>Register Now!</span
		>
	</p>
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
