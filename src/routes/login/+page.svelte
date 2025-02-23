<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPalette } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faGoogle, faFacebook, faGitlab } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex flex-col h-screen">
	<!-- Header Bar -->

	<header class="bg-primary-600 w-full px-6 py-4 flex items-center gap-3">
		<a href="/" class="flex items-center gap-2 cursor-pointer">
			<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
			<span class="text-white text-xl font-semibold tracking-wide">designer</span>
		</a>
	</header>

	<!-- Login Form -->

	<main class="flex flex-1 items-center justify-center bg-primary-600 min-h-screen">
		<div class="w-1/3 max-w-md p-8 rounded-lg flex flex-col items-center space-y-6 my-6">
			<!-- Title Section -->
			<div class="text-center w-full">
				<h1 class="text-2xl font-bold">Welcome to Designer</h1>
				<p class="text-slate-200">Please sign in to your account</p>
			</div>

			<!-- Email Login -->

			<div class="mt-4 w-full flex flex-col space-y-4 text-left">
				<div class="w-full">
					<label for="email" class="block text-sm font-medium text-slate-200 mb-1">Email</label>
					<input
						id="email"
						type="email"
						placeholder="Enter your email address here..."
						class="bg-primary-700 w-full text-gray-900 px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-blue-400"
					/>
				</div>
				<div class="w-full">
					<label for="password" class="block text-sm font-medium text-slate-200 mb-1"
						>Password</label
					>
					<input
						id="password"
						type="password"
						placeholder="Enter your password here..."
						class="bg-primary-700 w-full text-gray-900 px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-blue-400"
					/>

					<hr class="border-gray-700 w-full mt-2" />
				</div>
			</div>

			<!-- Separator -->

			<!-- Social Login -->
			<div class=" text-sm flex flex-col space-y-2 w-full">
				<a
					href="/about"
					class="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-500 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900"
				>
					<FontAwesomeIcon icon={faGithub} class="w-5 h-5" />
					Continue With Github
				</a>

				<a
					href="/services"
					class="flex items-center justify-center gap-2 bg-[#FC6D26] hover:bg-orange-600 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-primary-900 hover:shadow-2xl"
				>
					<FontAwesomeIcon icon={faGitlab} class="w-5 h-5" />
					Continue With Gitlab
				</a>

				<a
					href="/team"
					class="flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-blue-500 text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900"
				>
					<FontAwesomeIcon icon={faGoogle} class="w-5 h-5" />
					Continue With Google
				</a>

				<a
					href="/services"
					class="flex items-center justify-center gap-2 bg-[#0A4DA2] hover:bg-[#083B7A] text-white px-6 py-3 rounded-3xl transition-transform transform hover:-translate-y-1 hover:shadow-primary-900 hover:shadow-2xl"
				>
					<FontAwesomeIcon icon={faFacebook} class="w-5 h-5" />
					Continue With Facebook
				</a>
			</div>
		</div>
	</main>
</div>

<section class="w-full mt-[44px] text-center text-sm text-gray-400 py-5 bg-primary-700">
	<div class="w-full h-[1px] bg-primary-100 mx-auto mb-4"></div>
	<div class="max-w-md mx-auto">
		<p class="font-bold">
			Don't have an account?
			<a href="/signup" class="text-secondary-500 hover:underline">Sign up now!</a>
		</p>
		<p class="mt-2">
			By continuing, you agree to Designer's
			<a href="/terms" class="text-secondary-500 hover:underline">Terms of Service</a> and
			<a href="/privacy" class="text-secondary-500 hover:underline">Privacy Policy</a>, and to
			receive periodic emails with updates.
		</p>
	</div>
</section>

<style>
	input {
		color: #d1d2da !important;
	}
</style>
