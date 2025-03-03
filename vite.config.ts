import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		allowedHosts: ['9308-103-94-171-214.ngrok-free.app']
	},
	plugins: [sveltekit(), purgeCss()]
});
