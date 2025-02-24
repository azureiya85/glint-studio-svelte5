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
	<button on:click={drawLottery}>Draw Lottery</button>

	<p>Lottery Number: {lottery}</p>
	<p>Prize: {prize}</p>
</section>
