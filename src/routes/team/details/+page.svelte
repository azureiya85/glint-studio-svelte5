<script lang="ts">
	import TeamPage from '$lib/components/cell/TeamPage.svelte';

	// Set up metadata for SEO
	export const metadata = {
		title: 'Our Team | glint studio',
		description:
			'Meet the creative minds behind glint studio. Our diverse team of designers, developers, and strategists are passionate about creating exceptional digital experiences.'
	};
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
</svelte:head>

<TeamPage />
