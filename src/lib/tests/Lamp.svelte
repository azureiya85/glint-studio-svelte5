<script>
	let isOn = false;
</script>

<div class="lamp-container">
	<p class="font-bold mb-4 text-sm">{isOn ? 'Lights On' : 'Lights Off'}</p>
	<button class="lamp-btn" on:click={() => (isOn = !isOn)}> Toggle Light </button>
</div>

<style>
	.lamp-container {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 24px;
	}
	.lamp-btn {
		@apply text-sm bg-primary-800 border-[1px] border-tertiary-900 px-6 py-3 text-white rounded-3xl transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-lg;
	}
</style>
