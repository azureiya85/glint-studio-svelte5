<script lang="ts">
	import Icon from '@iconify/svelte';

	const socialLinks = [
		{
			icon: 'mdi:github',
			text: 'Continue with GitHub',
			url: 'https://github.com',
			color: '#5A5D72'
		},
		{
			icon: 'mdi:gitlab',
			text: 'Continue with GitLab',
			url: 'https://gitlab.com',
			color: '#E07B50'
		},
		{
			icon: 'mdi:google',
			text: 'Continue with Google',
			url: 'https://google.com',
			color: '#8A9FD1'
		},
		{
			icon: 'mdi:facebook',
			text: 'Continue with Facebook',
			url: 'https://facebook.com',
			color: '#56709C'
		}
	];

	let isVisible = $state(false);

	setTimeout(() => {
		isVisible = true;
	}, 100);
</script>

<div
	class="mb-4 text-sm w-full space-y-2 transition-opacity duration-500"
	class:opacity-100={isVisible}
	class:opacity-0={!isVisible}
>
	{#each socialLinks as { icon, text, url, color }}
		<button
			class="social-button"
			style="background: {color}"
			onclick={() => (window.location.href = url)}
		>
			<Icon {icon} class="icon" />
			{text}
		</button>
	{/each}
</div>

<style>
	.social-button {
		width: 100%;
		color: white;
		padding: 0.75rem;
		border: 1px solid #7c70a0;
		border-radius: 9999px;
		font-weight: 500;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.social-button:hover {
		transform: translateY(-2px);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
		filter: brightness(1.2);
	}

	/* .icon { */
	/* 	font-size: 1.5rem; */
	/* } */
</style>
