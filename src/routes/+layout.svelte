<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { authStore } from '$lib/stores/auth';
	import { page } from '$app/stores';

	// Import Skeleton components
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	//
	// Initialize Highlight.js
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Use the Svelte 5 $props rune
	let { children } = $props();

	// Initialize auth store with user data from the server
	onMount(() => {
		// Initialize auth store with data from the server
		authStore.initialize($page.data.user);
	});
</script>

<Toast />

{@render children?.()}
