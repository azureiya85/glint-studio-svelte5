<script lang="ts">
	import { counter } from './CounterClass.svelte';
</script>

<div>
	<label for="incrementor">Increment by: {counter.increment} </label>
	<input name="Incrementor" bind:value={counter.increment} type="range" min="1" max="5" />
</div>

<div>
	<label for="decrementor">Decrement by: {counter.decrement} </label>
	<input name="Decrementor" bind:value={counter.decrement} type="range" min="1" max="5" />
</div>
