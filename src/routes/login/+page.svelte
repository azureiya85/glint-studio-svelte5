<script lang="ts">
	import Header from '$lib/components/atom/Header.svelte';
	import Footer from '$lib/components/atom/Footer.svelte';
	import LoginForm from '$lib/components/molecule/LoginForm.svelte';
	import SocialLogin from '$lib/components/molecule/SocialLogin.svelte';
</script>

<svelte:head>
	<title>Login | Designer</title>
	<meta name="description" content="Sign in to Designer to access exclusive features." />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-1 items-center justify-center bg-primary-700 px-4 sm:px-6">
		<div class="w-full max-w-md p-6 sm:p-8 rounded-lg flex flex-col items-left bg-primary-700">
			<div class="text-left space-y-[1px]">
				<h1 class="text-2xl font-bold">Welcome to Designer</h1>
				<p class="text-slate-200">Please sign in to your account</p>
			</div>

			<LoginForm />

			<hr class="w-full border-t border-tertiary-600 my-4" />

			<SocialLogin />
		</div>
	</main>

	<Footer />
</div>
