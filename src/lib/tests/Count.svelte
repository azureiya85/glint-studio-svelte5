<script>
	let count = $state(0);
	let plustwo = $derived(count + 2);
	let doubled = $derived(count * 2);
	let squared = $derived(count * count);
	let description = $derived.by(() => {
		if (count < 10) return 'Low';
		if (count < 20) return 'Medium';
		return 'High';
	});

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}

	function reset() {
		count = 0;
	}

	function applyPlustwo() {
		count = plustwo;
	}

	function applyDoubled() {
		count = doubled;
	}

	function applySquared() {
		count = squared;
	}

	function apllyPlusfour() {
		count = plustwo + 2;
	}

	function applyQuadrupled() {
		count = doubled * 2;
	}

	function applyCubed() {
		count = squared * count;
	}
</script>

<section>
	<div class="flex flex-col justify-center items-center text-center mb-4">
		<h1 class="font-bold mt-4">Count: {count}</h1>
		<p class="font-bold mt-4">Description: {description}</p>

		<div class="flex gap-4 mt-4">
			<button class="count-btn" onclick={increment}>Increment</button>
			<button class="count-btn" onclick={decrement}>Decrement</button>
			<button class="count-btn" onclick={reset}>Reset</button>
		</div>

		<div class="flex gap-4 mt-4">
			<button class="count-btn" onclick={applyPlustwo}>+2</button>
			<button class="count-btn" onclick={apllyPlusfour}>+4</button>
			<button class="count-btn" onclick={applyDoubled}>Double</button>
			<button class="count-btn" onclick={applyQuadrupled}>Quadruple</button>
			<button class="count-btn" onclick={applySquared}>Square</button>
			<button class="count-btn" onclick={applyCubed}>Cube</button>
		</div>
	</div>
</section>

<style>
	.count-btn {
		@apply bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
