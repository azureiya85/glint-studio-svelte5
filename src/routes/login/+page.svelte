<script lang="ts">
	import { page } from '$app/stores';
	import { tick } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPalette } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faGoogle, faFacebook, faGitlab } from '@fortawesome/free-brands-svg-icons';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	const loginfail: ToastSettings = {
		message: 'Login failed. Please try again.',
		background: 'variant-filled-error',
		classes: 'rounded-base-token'
	};

	const loginsuccess: ToastSettings = {
		message: 'Login success.',
		background: 'bg-success-700',
		classes: 'bg-success-700'
	};

	let username = writable('');
	let password = writable('');
	let isLoading = writable(false);

	function visible(node: HTMLElement) {
		let unsubscribe = page.subscribe(async () => {
			await tick();
			node.classList.remove('opacity-0');
		});

		return {
			destroy() {
				unsubscribe();
			}
		};
	}
	function handleLogin(event: Event) {
		event.preventDefault();
		const credentials = {
			username: 'agus123',
			password: 'handless'
		};

		if ($username === credentials.username && $password === credentials.password) {
			toastStore.trigger(loginsuccess);
			isLoading.set(true);
			setTimeout(() => {
				isLoading.set(false);
				goto('/');
			}, 2000);
		} else {
			toastStore.trigger(loginfail);
		}
	}
</script>

<svelte:head>
	<title>Login | Designer</title>
	<meta name="description" content="Sign in to Designer to access exclusive features." />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<header
		class="bg-primary-800 w-full px-6 py-4 flex border-b border-tertiary-700 items-center gap-3"
	>
		<a href="/" class="flex items-center gap-2">
			<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
			<span class="text-white text-xl font-heading-token font-semibold tracking-wide">designer</span
			>
		</a>
	</header>

	<main class="flex flex-1 items-center justify-center bg-primary-700 px-4 sm:px-6">
		<div class="w-full max-w-md p-6 sm:p-8 rounded-lg flex flex-col items-left bg-primary-700">
			<div class="text-left space-y-[1px]">
				<h1 class="text-2xl font-bold">Welcome to designer</h1>
				<p class="text-slate-200">Please sign in to your account</p>
			</div>

			<form class="w-full mt-6 space-y-4" on:submit={handleLogin}>
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

				<button type="submit" class="social-button bg-secondary-700 hover:bg-secondary-800">
					Login
				</button>
			</form>

			<!-- Separator -->
			<hr class="w-full border-t border-tertiary-600 my-4" />

			<!-- Social login -->
			<div
				class="mb-4 text-sm w-full space-y-2 opacity-0 transition-opacity duration-300"
				use:visible
			>
				<button
					class="social-button bg-[#5A5D72] hover:bg-[#74768A]"
					on:click={() => (window.location.href = 'https://github.com')}
				>
					<FontAwesomeIcon icon={faGithub} class="icon" /> Continue with GitHub
				</button>
				<button
					class="social-button bg-[#E07B50] hover:bg-[#C86C46]"
					on:click={() => (window.location.href = 'https://gitlab.com')}
				>
					<FontAwesomeIcon icon={faGitlab} class="icon" /> Continue with GitLab
				</button>
				<button
					class="social-button bg-[#8A9FD1] hover:bg-[#7387B8]"
					on:click={() => (window.location.href = 'https://google.com')}
				>
					<FontAwesomeIcon icon={faGoogle} class="icon" /> Continue with Google
				</button>
				<button
					class="social-button bg-[#56709C] hover:bg-[#405A7E]"
					on:click={() => (window.location.href = 'https://facebook.com')}
				>
					<FontAwesomeIcon icon={faFacebook} class="icon" /> Continue with Facebook
				</button>
			</div>
		</div>
	</main>

	<footer class="w-full text-center text-sm text-gray-400 bg-primary-800 pb-4">
		<div class="w-full h-[1px] bg-tertiary-800 mx-auto mb-4"></div>
		<div class="max-w-md mx-auto">
			<p class="font-bold">
				Don't have an account? <a href="/signup" class="text-secondary-500 hover:underline"
					>Sign up now!</a
				>
			</p>
			<p class="mt-2">
				By continuing, you agree to Designer's
				<a href="/terms" class="text-secondary-500 hover:underline">Terms of Service</a> and
				<a href="/privacy" class="text-secondary-500 hover:underline">Privacy Policy</a>.
			</p>
		</div>
	</footer>
</div>

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

	.social-button {
		width: 100%;
		color: white;
		padding: 0.75rem;
		border: 1px solid #7c70a0;
		border-radius: 9999px;
		font-weight: 500;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.social-button:hover {
		transform: translateY(-2px);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	}
</style>
