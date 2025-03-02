<script>
	let numberInput = $state('');

	// Compute the total reactively using $derived.by
	let total = $derived.by(() => {
		try {
			// Allow only valid numbers and operators
			if (!/^[0-9+\-*/().\s]+$/.test(numberInput.trim())) {
				return 'Invalid input';
			}
			// Use Function constructor instead of eval() (safer)
			let result = new Function(`return (${numberInput})`)();
			return isNaN(result) ? 'Error' : result;
		} catch {
			return 'Error';
		}
	});
</script>

<div class="justify-center text-center mb-4">
	<h1 class="font-bold mt-8">Calculator</h1>
	<p class="justify-center text-center">Enter your equation</p>
</div>

<section class="calculator">
	<input type="text" bind:value={numberInput} placeholder="Enter equation..." />
	<div class="result">{total}</div>
</section>

<style>
	.calculator {
		max-width: 300px;
		margin: auto;
		text-align: center;
		font-family: sans-serif;
	}

	input {
		background: #1e293b;
		width: 100%;
		box-shadow: 0 0 0 1px #7c70a0;
		padding: 10px;
		font-size: 18px;
		color: black;
		text-align: center;
		border-radius: 999px;
		outline: none;
	}

	.result {
		margin-top: 10px;
		font-size: 24px;
		font-weight: bold;
		color: white;
	}
</style>
