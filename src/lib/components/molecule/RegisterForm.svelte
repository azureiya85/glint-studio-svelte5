<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';

	// Create state for form fields
	let email = $state('');
	let username = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let isLoading = $state(false);
	let isDeleteLoading = $state(false);

	// Get toast store for notifications
	const toastStore = getToastStore();

	// Toast notifications
	const registerSuccess: ToastSettings = {
		message: 'Registration successful! You can now login.',
		background: 'bg-success-700'
	};

	const registerFail: ToastSettings = {
		message: 'Registration failed. Please try again.',
		background: 'variant-filled-error'
	};

	const deleteSuccess: ToastSettings = {
		message: 'Account deleted successfully.',
		background: 'bg-success-700'
	};

	const deleteFail: ToastSettings = {
		message: 'Failed to delete account. Please try again.',
		background: 'variant-filled-error'
	};

	const passwordMismatch: ToastSettings = {
		message: 'Passwords do not match.',
		background: 'variant-filled-warning'
	};

	// Handle registration form submission
	async function handleRegister(event: Event) {
		event.preventDefault();

		// Validate passwords match
		if (password !== confirmPassword) {
			toastStore.trigger(passwordMismatch);
			return;
		}

		isLoading = true;

		try {
			const response = await fetch('/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, username, password })
			});

			const result = await response.json();

			if (result.success) {
				toastStore.trigger(registerSuccess);

				// Clear the form
				email = '';
				username = '';
				password = '';
				confirmPassword = '';

				// Optionally redirect to login page
				goto('/login');
			} else {
				toastStore.trigger({
					...registerFail,
					message: result.message || registerFail.message
				});
			}
		} catch (error) {
			console.error('Registration error:', error);
			toastStore.trigger(registerFail);
		} finally {
			isLoading = false;
		}
	}

	// Handle account deletion
	async function handleDeleteAccount() {
		if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
			return;
		}

		isDeleteLoading = true;

		try {
			const response = await fetch('/api/auth/delete-account', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				// Only send user identity if already logged in, otherwise use the form data
				body: JSON.stringify($authStore ? { username: $authStore.username } : { email, username })
			});

			const result = await response.json();

			if (result.success) {
				toastStore.trigger(deleteSuccess);

				// Log out if the user was logged in
				if ($authStore) {
					await authStore.logout();
				}

				// Clear the form
				email = '';
				username = '';
				password = '';
				confirmPassword = '';

				// Redirect to home page
				goto('/');
			} else {
				toastStore.trigger({
					...deleteFail,
					message: result.message || deleteFail.message
				});
			}
		} catch (error) {
			console.error('Account deletion error:', error);
			toastStore.trigger(deleteFail);
		} finally {
			isDeleteLoading = false;
		}
	}
</script>

<div class="w-full max-w-md">
	<h2 class="text-2xl font-bold mb-6">Register Now</h2>

	<form class="space-y-4" onsubmit={handleRegister}>
		<label class="block text-sm font-medium text-slate-200">
			Email
			<input
				type="email"
				placeholder="Enter your email..."
				class="input-field w-full mt-1 p-2 rounded-full bg-primary-800 border border-tertiary-800 text-white"
				bind:value={email}
				required
			/>
		</label>

		<label class="block text-sm font-medium text-slate-200">
			Username
			<input
				type="text"
				placeholder="Choose a username..."
				class="input-field w-full mt-1 p-2 rounded-full bg-primary-800 border border-tertiary-800 text-white"
				bind:value={username}
				required
			/>
		</label>

		<label class="block text-sm font-medium text-slate-200">
			Password
			<input
				type="password"
				placeholder="Create a password..."
				class="input-field w-full mt-1 p-2 rounded-full bg-primary-800 border border-tertiary-800 text-white"
				bind:value={password}
				required
				minlength="6"
			/>
		</label>

		<label class="block text-sm font-medium text-slate-200">
			Confirm Password
			<input
				type="password"
				placeholder="Confirm your password..."
				class="input-field w-full mt-1 p-2 rounded-full bg-primary-800 border border-tertiary-800 text-white"
				bind:value={confirmPassword}
				required
				minlength="6"
			/>
		</label>

		<button
			type="submit"
			class="w-full rounded-full bg-secondary-700 hover:bg-secondary-800 text-white py-2 border border-tertiary-800 transition-all"
			disabled={isLoading}
		>
			{isLoading ? 'Registering...' : 'Register'}
		</button>

		<hr class="border-t border-tertiary-600 my-4" />

		<button
			type="button"
			class="w-full rounded-full bg-error-500 hover:bg-error-600 text-white py-2 border border-tertiary-800 transition-all"
			onclick={handleDeleteAccount}
			disabled={isDeleteLoading}
		>
			{isDeleteLoading ? 'Deleting Account...' : 'Delete Account'}
		</button>

		<p class="text-center text-sm mt-4">
			Already have an account? <a href="/login" class="text-secondary-500 hover:underline">Login</a>
		</p>
	</form>
</div>
