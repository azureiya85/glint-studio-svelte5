<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { testimonials, fetchTestimonials } from '$lib/components/nerve/TestimonialData';

	onMount(() => {
		fetchTestimonials(6);

		const scrollingElement = document.querySelector<HTMLElement>('.animate-scroll');
		if (scrollingElement) {
			scrollingElement.addEventListener(
				'mouseenter',
				() => (scrollingElement.style.animationPlayState = 'paused')
			);
			scrollingElement.addEventListener(
				'mouseleave',
				() => (scrollingElement.style.animationPlayState = 'running')
			);
		}
	});
</script>

<section aria-labelledby="testimonial-heading">
	<div class="relative min-h-screen flex flex-col items-center justify-center py-8 px-4 md:px-16">
		<!-- Background Image with Blur -->
		<div
			class="absolute inset-0 bg-[url('/image/image_testimony.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-primary-800/50 before:backdrop-blur-lg"
			role="presentation"
		></div>

		<!-- Main Content Box -->
		<div
			class="relative z-10 flex flex-col md:flex-row gap-8 bg-primary-900 px-8 py-12 border border-tertiary-600 rounded-[32px] md:rounded-[64px] w-full max-w-full md:max-w-6xl md:mx-16 shadow-2xl"
		>
			<!-- Text Section -->
			<div class="flex flex-col text-left w-full md:w-1/2">
				<h2
					id="testimonial-heading"
					class="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center md:text-left"
				>
					What our <span class="text-secondary-600">customers <br /></span> say about us
				</h2>
				<p class="text-lg md:text-2xl font-normal text-center md:text-left">
					With over 500,000 successful projects, we help businesses—big and small—enhance their
					digital presence through thoughtful design solutions. Our team delivers user-friendly,
					data-driven designs tailored to each client's needs, ensuring high standards of
					creativity, functionality, and user experience.
				</p>
			</div>

			<!-- Scrolling Testimonials -->
			<div class="relative h-[50vh] md:h-[75vh] overflow-hidden p-4 fade-mask w-full md:w-1/2">
				<div class="animate-scroll flex flex-col gap-4">
					{#each [...$testimonials, ...$testimonials] as testimonial, i (testimonial.id + '-' + i)}
						<article
							class="p-4 bg-secondary-600 dark:bg-primary-600 rounded-full shadow-2xl border border-tertiary-700 scale-90"
							in:fly={{ y: 20, opacity: 0, duration: 500, delay: i * 150 }}
						>
							<div class="flex flex-row-reverse items-center gap-4">
								<img
									class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary shadow"
									src={testimonial.image}
									alt={`Profile picture of ${testimonial.name}`}
								/>
								<div class="text-left pl-4">
									<h3 class="text-sm md:text-base font-medium">
										{testimonial.name} <span class="px-2">|</span>
										<span class="font-normal">{testimonial.location}</span>
									</h3>
									<p class="text-base md:text-lg font-bold mt-1">"{testimonial.message}"</p>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>

		<!-- Stats Section -->
		<div
			class="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 text-center mt-12 md:mt-16 px-4 md:px-0"
		>
			<div>
				<p class="text-3xl md:text-5xl font-bold">500k+</p>
				<p class="text-base md:text-lg font-medium">PROJECTS</p>
			</div>
			<div>
				<p class="text-3xl md:text-5xl font-bold">100k+</p>
				<p class="text-base md:text-lg font-medium">CLIENTS</p>
			</div>
			<div>
				<p class="text-3xl md:text-5xl font-bold">70+</p>
				<p class="text-base md:text-lg font-medium">COUNTRIES</p>
			</div>
		</div>
	</div>
</section>

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
