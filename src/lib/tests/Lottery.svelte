<script>
	let lottery = 0;
	let prize = '';

	function drawLottery() {
		const random = Math.floor(Math.random() * 100);
		let reward = 'No prize this time';

		if (random <= 10) {
			reward = 'Shirt';
		} else if (random <= 30) {
			reward = 'Shoes';
		} else if (random <= 50) {
			reward = 'Bag';
		} else if (random <= 70) {
			reward = 'Car';
		} else {
			reward = 'House';
		}

		lottery = random;
		prize = reward;
	}
</script>

<section>
	<div class="flex flex-col items-center justify-center text-center">
		<button class="draw-btn" on:click={drawLottery}>Draw Lottery</button>
		<p>Lottery Number: {lottery}</p>
		<p>Prize: {prize}</p>
	</div>
</section>

<style>
	.draw-btn {
		@apply font-bold bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
