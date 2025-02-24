<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faGoogle, faFacebook, faGitlab } from '@fortawesome/free-brands-svg-icons';

	const socialLinks = [
		{ icon: faGithub, text: 'Continue with GitHub', url: 'https://github.com', color: '#5A5D72' },
		{ icon: faGitlab, text: 'Continue with GitLab', url: 'https://gitlab.com', color: '#E07B50' },
		{ icon: faGoogle, text: 'Continue with Google', url: 'https://google.com', color: '#8A9FD1' },
		{
			icon: faFacebook,
			text: 'Continue with Facebook',
			url: 'https://facebook.com',
			color: '#56709C'
		}
	];

	let isVisible = false;

	// Ensure transition happens after the component is mounted
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
			on:click={() => (window.location.href = url)}
		>
			<FontAwesomeIcon {icon} class="icon" />
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
	}
</style>
