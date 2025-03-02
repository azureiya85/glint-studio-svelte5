<script>
	let lottery = $state(Math.floor(Math.random() * 100));

	let prize = $derived.by(() => {
		if (lottery <= 10) return 'Shirt';
		if (lottery <= 30) return 'Shoes';
		if (lottery <= 50) return 'Bag';
		if (lottery <= 70) return 'Car';
		return 'House';
	});

	function drawLottery() {
		lottery = Math.floor(Math.random() * 100);
	}
</script>

<section>
	<div class="flex flex-col items-center justify-center text-center">
		<button class="draw-btn" onclick={drawLottery}>Draw Lottery</button>
		<p>Lottery Number: {lottery}</p>
		<p>Prize: {prize}</p>
	</div>
</section>

<style>
	.draw-btn {
		@apply font-bold bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
