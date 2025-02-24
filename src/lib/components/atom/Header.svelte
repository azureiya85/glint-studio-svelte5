<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPalette } from '@fortawesome/free-solid-svg-icons';
</script>

<header
	class="bg-primary-800 w-full px-6 py-4 flex border-b border-tertiary-700 items-center gap-3"
>
	<a href="/" class="flex items-center gap-2">
		<FontAwesomeIcon icon={faPalette} class="text-secondary-500 text-2xl" />
		<span class="text-white text-xl font-heading-token font-semibold tracking-wide">designer</span>
	</a>
</header>
