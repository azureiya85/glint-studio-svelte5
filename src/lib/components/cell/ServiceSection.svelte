<script>
	import { serviceDescriptions } from '$lib/components/nerve/ServiceDesc';
</script>

<div class="min-h-screen flex flex-col items-center bg-primary-800">
	<!-- First Container -->
	<div class="flex flex-col justify-center items-center text-center my-16">
		<h1 class="font-heading-token text-6xl text-secondary-600 font-bold">Main Heading</h1>
		<p class="text-lg text-white mt-4">This is a descriptive paragraph for the main heading.</p>
	</div>

	<!-- Second Container -->
	<div class="flex flex-col-4 gap-6 mx-16 h-[360px]">
		<!-- Service Descriptions -->
		{#each $serviceDescriptions as service}
			<div class=" p-6 shadow-2xl rounded-3xl bg-primary-700 border border-tertiary-800">
				<p class="text-sm font-medium text-primary-100 mb-4">{service.catchphrase}</p>
				<h2 class="text-primary-100 text-3xl font-bold mb-4">{service.heading}</h2>
				<p class="text-primary-100">{service.description}</p>
			</div>
		{/each}
	</div>
</div>
