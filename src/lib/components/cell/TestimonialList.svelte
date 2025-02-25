<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { testimonials, fetchTestimonials } from '$lib/components/nerve/TestimonialData';

	onMount(() => fetchTestimonials(6));

	let scrollingElement: HTMLElement | null = null;

	function stopScroll() {
		if (scrollingElement) {
			scrollingElement.style.animationPlayState = 'paused';
		}
	}

	function startScroll() {
		if (scrollingElement) {
			scrollingElement.style.animationPlayState = 'running';
		}
	}

	onMount(() => {
		scrollingElement = document.querySelector('.animate-scroll');
	});
</script>

<div class="min-h-[50vh] grid grid-cols-2 gap-4 bg-primary-800">
	<!-- Text Section -->
	<div class="flex flex-col px-4 justify-center text-left">
		<h2 class="text-xl font-semibold">This is what our clients have to say</h2>
		<p class="text-sm font-normal">Our team is trusted by millions of clients across continents.</p>
	</div>

	<!-- Scrolling Testimonials -->
	<div class="relative h-[50vh] overflow-hidden p-4 fade-mask">
		<div
			role="presentation"
			class="animate-scroll flex flex-col gap-4"
			onmouseenter={() => stopScroll()}
			onmouseleave={() => startScroll()}
		>
			{#each [...$testimonials, ...$testimonials] as testimonial, i (testimonial.id + '-' + i)}
				<div
					class="p-4 bg-secondary-600 dark:bg-primary-600 rounded-full shadow-2xl border border-tertiary-700 scale-90"
					in:fly={{ y: 20, opacity: 0, duration: 500, delay: i * 150 }}
				>
					<div class="flex flex-row-reverse items-center gap-4">
						<img
							class="w-16 h-16 rounded-full border border-primary shadow"
							src={testimonial.image}
							alt="User"
						/>
						<div class="text-left pl-4">
							<h3 class="text-sm font-normal">{testimonial.name}</h3>
							<p class="text-lg font-bold mt-1">"{testimonial.message}"</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes scroll {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 15s linear infinite;
	}

	/* Fading effect using mask */
	.fade-mask {
		-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
		mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
	}
</style>
