<script>
	let numberInput = '';
	let total = '';

	function calculate() {
		try {
			if (numberInput.trim() !== '') {
				total = eval(numberInput); // Be cautious with eval in real applications
			} else {
				total = '';
			}
		} catch (e) {
			total = 'Error';
		}
	}
</script>

<div class="justify-center text-center mb-4">
	<h1 class="font-bold mt-8">Calculator</h1>
	<p class="justify-center text-center">Enter your equation</p>
</div>

<section class="calculator">
	<input
		type="text"
		bind:value={numberInput}
		on:input={calculate}
		placeholder="Enter equation..."
	/>
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
		width: 100%;
		padding: 10px;
		font-size: 18px;
		color: black;
		text-align: center;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
	}

	.result {
		margin-top: 10px;
		font-size: 24px;
		font-weight: bold;
		color: #333;
	}
</style>
