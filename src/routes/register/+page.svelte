<script lang="ts">
	import Header from '$lib/components/atom/Header.svelte';
	import Footer from '$lib/components/atom/Footer.svelte';
	import RegisterForm from '$lib/components/molecule/RegisterForm.svelte';
</script>

<svelte:head>
	<title>Register | glint studio</title>
	<meta
		name="description"
		content="Create a new account on glint studio to access exclusive features."
	/>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-1 items-center justify-center bg-primary-700 px-4 sm:px-6">
		<div class="w-full max-w-md p-6 sm:p-8 rounded-lg flex flex-col items-left bg-primary-700">
			<RegisterForm />
		</div>
	</main>

	<Footer />
</div>
