<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}
</script>

<section>
	<div class="flex flex-col justify-center items-center text-center mb-4">
		<h1 class="font-bold mt-4">Count: {count}</h1>
		<div class="flex gap-4 mt-4">
			<button class="count-btn" onclick={increment}>Increment</button>
			<button class="count-btn" onclick={decrement}>Decrement</button>
		</div>
	</div>
</section>

<style>
	.count-btn {
		@apply bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
