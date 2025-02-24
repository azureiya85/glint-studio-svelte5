<script lang="ts">
	import { onMount } from 'svelte';
	import { testimonials, fetchTestimonials, loading } from '$lib/components/nerve/TestimonialData';

	onMount(() => fetchTestimonials(3));
</script>

<div class="flex justify-between items-center px-4">
	<h2 class="text-xl font-semibold">Testimonials</h2>
	<button
		on:click={() => fetchTestimonials(3)}
		class="px-4 py-2 border rounded-lg text-primary border-primary hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
		disabled={$loading}
	>
		{#if $loading}
			Refreshing...
		{/if}
		{#if !$loading}
			Refresh
		{/if}
	</button>
</div>

{#if $testimonials.length > 0}
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
		{#each $testimonials as testimonial}
			<div class="p-4 bg-surface-200 dark:bg-surface-700 rounded-xl shadow-md text-center">
				<div class="flex flex-col items-center">
					<img
						class="w-16 h-16 rounded-full border border-primary shadow"
						src={testimonial.image}
						alt="User"
					/>
					<h3 class="text-base font-semibold mt-2">{testimonial.name}</h3>
					<p class="text-sm italic text-secondary">{testimonial.location}</p>
				</div>
				<p class="mt-2 text-sm text-gray-600 dark:text-gray-300">"{testimonial.message}"</p>
			</div>
		{/each}
	</div>
{/if}
