<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPalette } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faGoogle, faFacebook, faGitlab } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<title>Login | Designer</title>
	<meta name="description" content="Sign in to Designer to access exclusive features." />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<header class="bg-primary-600 w-full px-6 py-4 flex items-center gap-3">
		<a href="/" class="flex items-center gap-2">
			<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
			<span class="text-white text-xl font-semibold tracking-wide">designer</span>
		</a>
	</header>

	<main class="flex flex-1 items-center justify-center bg-primary-600 px-4 sm:px-6">
		<div class="w-full max-w-md p-6 sm:p-8 rounded-lg flex flex-col items-center bg-primary-600">
			<!-- Title section -->
			<div class="text-center space-y-1">
				<h1 class="text-2xl font-bold">Welcome to Designer</h1>
				<p class="text-slate-200">Please sign in to your account</p>
			</div>

			<!-- Email login -->
			<form class="w-full mt-6 space-y-4">
				<label class="block text-sm font-medium text-slate-200">
					Email
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Enter your email..."
						class="input-field"
						required
					/>
				</label>

				<label class="block text-sm font-medium text-slate-200">
					Password
					<input
						id="password"
						type="password"
						name="password"
						placeholder="Enter your password..."
						class="input-field"
						required
					/>
				</label>
			</form>

			<!-- Separator -->
			<hr class="w-full border-t border-gray-600 my-4" />

			<!-- Social login -->
			<div class="mb-4 text-sm w-full space-y-2">
				<button class="social-button bg-slate-700 hover:bg-slate-500">
					<FontAwesomeIcon icon={faGithub} class="icon" /> Continue with GitHub
				</button>
				<button class="social-button bg-[#FC6D26] hover:bg-orange-600">
					<FontAwesomeIcon icon={faGitlab} class="icon" /> Continue with GitLab
				</button>
				<button class="social-button bg-[#4285F4] hover:bg-blue-500">
					<FontAwesomeIcon icon={faGoogle} class="icon" /> Continue with Google
				</button>
				<button class="social-button bg-[#0A4DA2] hover:bg-[#083B7A]">
					<FontAwesomeIcon icon={faFacebook} class="icon" /> Continue with Facebook
				</button>
			</div>
		</div>
	</main>

	<footer class="w-full text-center text-sm text-gray-400 bg-primary-700 pb-4">
		<div class="w-full h-[1px] bg-white mx-auto mb-4"></div>
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
		box-shadow: 0 0 0 1px #7d8097;
		width: 100%;
		color: #d1d2da;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		border: none;
		outline: none;
		transition: box-shadow 0.2s;
	}

	.input-field:focus {
		box-shadow: 0 0 0 2px #3b82f6;
	}

	.social-button {
		width: 100%;
		color: white;
		padding: 0.75rem;
		border: 1px solid #b5b6c3;
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
