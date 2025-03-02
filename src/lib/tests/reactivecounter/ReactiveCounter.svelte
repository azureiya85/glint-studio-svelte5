<script>
	import { counter } from './CounterClass.svelte';
	import Incrementor from './Incrementor.svelte';
</script>

<section>
	<div class="flex flex-col justify-center items-center text-center mb-4">
		<h1 class="font-bold mt-4">Reactive Count: {counter.count}</h1>

		<Incrementor />

		<div class="flex gap-4 mt-4">
			<button class="count-btn" onclick={() => counter.inc()}>Increment</button>
			<button class="count-btn" onclick={() => counter.dec()}>Decrement</button>
			<button class="count-btn" onclick={() => counter.reset()}>Reset</button>
		</div>
	</div>
</section>

<style>
	.count-btn {
		@apply bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
