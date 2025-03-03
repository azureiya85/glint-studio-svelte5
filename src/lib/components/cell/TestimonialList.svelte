<script lang="ts">
	import { testimonials, fetchTestimonials } from '$lib/components/nerve/TestimonialData';

	// Reactive state using runes
	let contentVisible = $state(false);
	let textVisible = $state(false);
	let testimonialsVisible = $state(false);
	let statsVisible = $state(false);

	// Element references
	let mainContentBox: HTMLElement | undefined;
	let textSection: HTMLElement | undefined;
	let testimonialsSection: HTMLElement | undefined;
	let statsSection: HTMLElement | undefined;

	// Creates an Intersection Observer
	function createVisibilityObserver(
		node: HTMLElement,
		callback: (visible: boolean) => void,
		threshold = 0.3
	) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					callback(true);
					observer.unobserve(node);
				}
			},
			{ threshold }
		);
		observer.observe(node);
		return observer;
	}

	// Animates a number counter
	function animateCounter(element: HTMLElement, target: number, duration = 1500, suffix = 'k+') {
		let startTimestamp: number | null = null;
		const startValue = 0;

		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const currentValue = Math.floor(progress * (target - startValue) + startValue);
			element.textContent = `${currentValue}${suffix}`;
			if (progress < 1) window.requestAnimationFrame(step);
			else element.textContent = `${target}${suffix}`;
		};

		window.requestAnimationFrame(step);
	}

	// Initializes counters with staggered animation
	function initCounters() {
		if (!statsVisible) return;

		const counterElements = document.querySelectorAll('.counter');
		counterElements.forEach((element, index) => {
			const target = parseInt(element.getAttribute('data-target') || '0', 10);
			const suffix = element.getAttribute('data-suffix') || 'k+';
			setTimeout(() => animateCounter(element as HTMLElement, target, 1500, suffix), index * 300);
		});
	}

	// Fetch data and setup observers
	$effect(() => {
		fetchTestimonials(6);

		if (!mainContentBox || !textSection || !testimonialsSection || !statsSection) return;

		const observers: IntersectionObserver[] = [];

		observers.push(
			createVisibilityObserver(mainContentBox, (visible) => {
				contentVisible = visible;
				setTimeout(() => (textVisible = true), 400);
			})
		);

		observers.push(
			createVisibilityObserver(testimonialsSection, (visible) => {
				setTimeout(() => (testimonialsVisible = visible), 600);
			})
		);

		observers.push(
			createVisibilityObserver(
				statsSection,
				(visible) => {
					statsVisible = visible;
					if (visible) setTimeout(initCounters, 300);
				},
				0.1
			)
		);

		return () => observers.forEach((obs) => obs.disconnect());
	});
</script>

<section aria-labelledby="testimonial-heading">
	<div class="relative min-h-screen flex flex-col items-center justify-center py-8 px-4 md:px-16">
		<div
			class="absolute inset-0 bg-[url('/image/image_testimony.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-primary-800/50 before:backdrop-blur-lg"
			aria-hidden="true"
		></div>

		<div
			bind:this={mainContentBox}
			class="relative z-10 flex flex-col md:flex-row gap-8 bg-primary-900 px-8 py-12 border border-tertiary-600 rounded-[32px] md:rounded-[64px] w-full max-w-full md:max-w-6xl md:mx-16 shadow-2xl opacity-0 translate-y-10 transition-all duration-700 ease-out"
			class:visible={contentVisible}
		>
			<div
				bind:this={textSection}
				class="flex flex-col text-left w-full md:w-1/2 opacity-0 transition-opacity duration-500"
				class:visible={textVisible}
			>
				<h2
					id="testimonial-heading"
					class="font-heading-token text-4xl md:text-6xl font-bold mb-6 leading-tight text-center md:text-left opacity-0 translate-y-10 transition-all duration-700 ease-out"
					class:visible={textVisible}
				>
					<span class="text-primary-50"> what our </span>
					<span class="text-secondary-600">customers <br /></span>
					<span class="text-primary-50"> say about us </span>
				</h2>
				<p
					class="text-lg md:text-2xl font-normal text-center md:text-left opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
					class:visible={textVisible}
				>
					With over 500,000 successful projects, we help businesses—big and small—enhance their
					digital presence through thoughtful design solutions. Our team delivers user-friendly,
					data-driven designs tailored to each client's needs, ensuring high standards of
					creativity, functionality, and user experience.
				</p>
			</div>

			<div
				bind:this={testimonialsSection}
				class="relative h-[50vh] md:h-[75vh] overflow-hidden p-4 fade-mask w-full md:w-1/2 opacity-0 transition-opacity duration-700 ease-in delay-500"
				class:visible={testimonialsVisible}
			>
				<div class="animate-scroll flex flex-col gap-4" aria-live="polite">
					{#each [...$testimonials, ...$testimonials] as testimonial, i (testimonial.id + '-' + i)}
						<article
							class="p-4 bg-secondary-600 dark:bg-primary-600 rounded-full shadow-2xl border border-tertiary-700 scale-90"
						>
							<div class="flex flex-row-reverse items-center gap-4">
								<img
									class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary shadow"
									src={testimonial.image}
									alt={`Profile picture of ${testimonial.name}`}
									loading="lazy"
									width="64"
									height="64"
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

		<div
			bind:this={statsSection}
			class="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 text-center mt-12 md:mt-16 px-4 md:px-0"
		>
			<div
				class="opacity-0 translate-y-10 transition-all duration-700 ease-out"
				class:visible={statsVisible}
				style:transition-delay="0ms"
			>
				<p class="text-3xl md:text-5xl font-bold counter" data-target="500" data-suffix="k+">0</p>
				<p class="text-base md:text-lg font-medium">PROJECTS</p>
			</div>
			<div
				class="opacity-0 translate-y-10 transition-all duration-700 ease-out"
				class:visible={statsVisible}
				style:transition-delay="300ms"
			>
				<p class="text-3xl md:text-5xl font-bold counter" data-target="100" data-suffix="k+">0</p>
				<p class="text-base md:text-lg font-medium">CLIENTS</p>
			</div>
			<div
				class="opacity-0 translate-y-10 transition-all duration-700 ease-out"
				class:visible={statsVisible}
				style:transition-delay="600ms"
			>
				<p class="text-3xl md:text-5xl font-bold counter" data-target="70" data-suffix="+">0</p>
				<p class="text-base md:text-lg font-medium">COUNTRIES</p>
			</div>
		</div>
	</div>
</section>

<style>
	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}

	.translate-y-10 {
		transform: translateY(40px);
	}

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

	.fade-mask {
		-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
		mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
	}

	@media (prefers-reduced-motion) {
		.animate-scroll {
			animation-play-state: paused;
		}
		.translate-y-10 {
			transform: none;
		}
		.transition-all {
			transition: opacity 0.1s ease-out !important;
		}
	}
</style>
